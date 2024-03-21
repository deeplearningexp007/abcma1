import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { MenuItemCategoryResolverBase } from "./base/menuItemCategory.resolver.base";
import { MenuItemCategory } from "./base/MenuItemCategory";
import { MenuItemCategoryService } from "./menuItemCategory.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => MenuItemCategory)
export class MenuItemCategoryResolver extends MenuItemCategoryResolverBase {
  constructor(
    protected readonly service: MenuItemCategoryService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
