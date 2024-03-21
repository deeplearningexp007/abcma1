/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { ErrorLogService } from "../errorLog.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { ErrorLogCreateInput } from "./ErrorLogCreateInput";
import { ErrorLog } from "./ErrorLog";
import { ErrorLogFindManyArgs } from "./ErrorLogFindManyArgs";
import { ErrorLogWhereUniqueInput } from "./ErrorLogWhereUniqueInput";
import { ErrorLogUpdateInput } from "./ErrorLogUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class ErrorLogControllerBase {
  constructor(
    protected readonly service: ErrorLogService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: ErrorLog })
  @nestAccessControl.UseRoles({
    resource: "ErrorLog",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createErrorLog(
    @common.Body() data: ErrorLogCreateInput
  ): Promise<ErrorLog> {
    return await this.service.createErrorLog({
      data: {
        ...data,

        userModels: data.userModels
          ? {
              connect: data.userModels,
            }
          : undefined,
      },
      select: {
        errorCode: true,
        errorMessage: true,
        id: true,
        requestInfo: true,
        stackTrace: true,
        timestamp: true,

        userModels: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [ErrorLog] })
  @ApiNestedQuery(ErrorLogFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "ErrorLog",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async errorLogs(@common.Req() request: Request): Promise<ErrorLog[]> {
    const args = plainToClass(ErrorLogFindManyArgs, request.query);
    return this.service.errorLogs({
      ...args,
      select: {
        errorCode: true,
        errorMessage: true,
        id: true,
        requestInfo: true,
        stackTrace: true,
        timestamp: true,

        userModels: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: ErrorLog })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "ErrorLog",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async errorLog(
    @common.Param() params: ErrorLogWhereUniqueInput
  ): Promise<ErrorLog | null> {
    const result = await this.service.errorLog({
      where: params,
      select: {
        errorCode: true,
        errorMessage: true,
        id: true,
        requestInfo: true,
        stackTrace: true,
        timestamp: true,

        userModels: {
          select: {
            id: true,
          },
        },
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: ErrorLog })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "ErrorLog",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateErrorLog(
    @common.Param() params: ErrorLogWhereUniqueInput,
    @common.Body() data: ErrorLogUpdateInput
  ): Promise<ErrorLog | null> {
    try {
      return await this.service.updateErrorLog({
        where: params,
        data: {
          ...data,

          userModels: data.userModels
            ? {
                connect: data.userModels,
              }
            : undefined,
        },
        select: {
          errorCode: true,
          errorMessage: true,
          id: true,
          requestInfo: true,
          stackTrace: true,
          timestamp: true,

          userModels: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: ErrorLog })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "ErrorLog",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteErrorLog(
    @common.Param() params: ErrorLogWhereUniqueInput
  ): Promise<ErrorLog | null> {
    try {
      return await this.service.deleteErrorLog({
        where: params,
        select: {
          errorCode: true,
          errorMessage: true,
          id: true,
          requestInfo: true,
          stackTrace: true,
          timestamp: true,

          userModels: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}