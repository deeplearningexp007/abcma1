import { Test } from "@nestjs/testing";
import {
  INestApplication,
  HttpStatus,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import request from "supertest";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { map } from "rxjs";
import { MenuItemCategoryController } from "../menuItemCategory.controller";
import { MenuItemCategoryService } from "../menuItemCategory.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  id: 42,
  name: "exampleName",
};
const CREATE_RESULT = {
  id: 42,
  name: "exampleName",
};
const FIND_MANY_RESULT = [
  {
    id: 42,
    name: "exampleName",
  },
];
const FIND_ONE_RESULT = {
  id: 42,
  name: "exampleName",
};

const service = {
  createMenuItemCategory() {
    return CREATE_RESULT;
  },
  menuItemCategories: () => FIND_MANY_RESULT,
  menuItemCategory: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

const aclFilterResponseInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle().pipe(
      map((data) => {
        return data;
      })
    );
  },
};
const aclValidateRequestInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle();
  },
};

describe("MenuItemCategory", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: MenuItemCategoryService,
          useValue: service,
        },
      ],
      controllers: [MenuItemCategoryController],
      imports: [ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .overrideInterceptor(AclFilterResponseInterceptor)
      .useValue(aclFilterResponseInterceptor)
      .overrideInterceptor(AclValidateRequestInterceptor)
      .useValue(aclValidateRequestInterceptor)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /menuItemCategories", async () => {
    await request(app.getHttpServer())
      .post("/menuItemCategories")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect(CREATE_RESULT);
  });

  test("GET /menuItemCategories", async () => {
    await request(app.getHttpServer())
      .get("/menuItemCategories")
      .expect(HttpStatus.OK)
      .expect([FIND_MANY_RESULT[0]]);
  });

  test("GET /menuItemCategories/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/menuItemCategories"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /menuItemCategories/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/menuItemCategories"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect(FIND_ONE_RESULT);
  });

  test("POST /menuItemCategories existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/menuItemCategories")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect(CREATE_RESULT)
      .then(function () {
        agent
          .post("/menuItemCategories")
          .send(CREATE_INPUT)
          .expect(HttpStatus.CONFLICT)
          .expect({
            statusCode: HttpStatus.CONFLICT,
          });
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
