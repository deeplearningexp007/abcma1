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
import { FavoriteRestaurantService } from "../favoriteRestaurant.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { FavoriteRestaurantCreateInput } from "./FavoriteRestaurantCreateInput";
import { FavoriteRestaurant } from "./FavoriteRestaurant";
import { FavoriteRestaurantFindManyArgs } from "./FavoriteRestaurantFindManyArgs";
import { FavoriteRestaurantWhereUniqueInput } from "./FavoriteRestaurantWhereUniqueInput";
import { FavoriteRestaurantUpdateInput } from "./FavoriteRestaurantUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class FavoriteRestaurantControllerBase {
  constructor(
    protected readonly service: FavoriteRestaurantService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: FavoriteRestaurant })
  @nestAccessControl.UseRoles({
    resource: "FavoriteRestaurant",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createFavoriteRestaurant(
    @common.Body() data: FavoriteRestaurantCreateInput
  ): Promise<FavoriteRestaurant> {
    return await this.service.createFavoriteRestaurant({
      data: {
        ...data,

        favorites: data.favorites
          ? {
              connect: data.favorites,
            }
          : undefined,

        restaurants: data.restaurants
          ? {
              connect: data.restaurants,
            }
          : undefined,
      },
      select: {
        createdAt: true,

        favorites: {
          select: {
            id: true,
          },
        },

        id: true,

        restaurants: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [FavoriteRestaurant] })
  @ApiNestedQuery(FavoriteRestaurantFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "FavoriteRestaurant",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async favoriteRestaurants(
    @common.Req() request: Request
  ): Promise<FavoriteRestaurant[]> {
    const args = plainToClass(FavoriteRestaurantFindManyArgs, request.query);
    return this.service.favoriteRestaurants({
      ...args,
      select: {
        createdAt: true,

        favorites: {
          select: {
            id: true,
          },
        },

        id: true,

        restaurants: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: FavoriteRestaurant })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "FavoriteRestaurant",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async favoriteRestaurant(
    @common.Param() params: FavoriteRestaurantWhereUniqueInput
  ): Promise<FavoriteRestaurant | null> {
    const result = await this.service.favoriteRestaurant({
      where: params,
      select: {
        createdAt: true,

        favorites: {
          select: {
            id: true,
          },
        },

        id: true,

        restaurants: {
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
  @swagger.ApiOkResponse({ type: FavoriteRestaurant })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "FavoriteRestaurant",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateFavoriteRestaurant(
    @common.Param() params: FavoriteRestaurantWhereUniqueInput,
    @common.Body() data: FavoriteRestaurantUpdateInput
  ): Promise<FavoriteRestaurant | null> {
    try {
      return await this.service.updateFavoriteRestaurant({
        where: params,
        data: {
          ...data,

          favorites: data.favorites
            ? {
                connect: data.favorites,
              }
            : undefined,

          restaurants: data.restaurants
            ? {
                connect: data.restaurants,
              }
            : undefined,
        },
        select: {
          createdAt: true,

          favorites: {
            select: {
              id: true,
            },
          },

          id: true,

          restaurants: {
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
  @swagger.ApiOkResponse({ type: FavoriteRestaurant })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "FavoriteRestaurant",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteFavoriteRestaurant(
    @common.Param() params: FavoriteRestaurantWhereUniqueInput
  ): Promise<FavoriteRestaurant | null> {
    try {
      return await this.service.deleteFavoriteRestaurant({
        where: params,
        select: {
          createdAt: true,

          favorites: {
            select: {
              id: true,
            },
          },

          id: true,

          restaurants: {
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