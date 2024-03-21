/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { FavoriteRestaurant } from "./FavoriteRestaurant";
import { FavoriteRestaurantCountArgs } from "./FavoriteRestaurantCountArgs";
import { FavoriteRestaurantFindManyArgs } from "./FavoriteRestaurantFindManyArgs";
import { FavoriteRestaurantFindUniqueArgs } from "./FavoriteRestaurantFindUniqueArgs";
import { CreateFavoriteRestaurantArgs } from "./CreateFavoriteRestaurantArgs";
import { UpdateFavoriteRestaurantArgs } from "./UpdateFavoriteRestaurantArgs";
import { DeleteFavoriteRestaurantArgs } from "./DeleteFavoriteRestaurantArgs";
import { Favorite } from "../../favorite/base/Favorite";
import { Restaurant } from "../../restaurant/base/Restaurant";
import { FavoriteRestaurantService } from "../favoriteRestaurant.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => FavoriteRestaurant)
export class FavoriteRestaurantResolverBase {
  constructor(
    protected readonly service: FavoriteRestaurantService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "FavoriteRestaurant",
    action: "read",
    possession: "any",
  })
  async _favoriteRestaurantsMeta(
    @graphql.Args() args: FavoriteRestaurantCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [FavoriteRestaurant])
  @nestAccessControl.UseRoles({
    resource: "FavoriteRestaurant",
    action: "read",
    possession: "any",
  })
  async favoriteRestaurants(
    @graphql.Args() args: FavoriteRestaurantFindManyArgs
  ): Promise<FavoriteRestaurant[]> {
    return this.service.favoriteRestaurants(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => FavoriteRestaurant, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "FavoriteRestaurant",
    action: "read",
    possession: "own",
  })
  async favoriteRestaurant(
    @graphql.Args() args: FavoriteRestaurantFindUniqueArgs
  ): Promise<FavoriteRestaurant | null> {
    const result = await this.service.favoriteRestaurant(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => FavoriteRestaurant)
  @nestAccessControl.UseRoles({
    resource: "FavoriteRestaurant",
    action: "create",
    possession: "any",
  })
  async createFavoriteRestaurant(
    @graphql.Args() args: CreateFavoriteRestaurantArgs
  ): Promise<FavoriteRestaurant> {
    return await this.service.createFavoriteRestaurant({
      ...args,
      data: {
        ...args.data,

        favorites: args.data.favorites
          ? {
              connect: args.data.favorites,
            }
          : undefined,

        restaurants: args.data.restaurants
          ? {
              connect: args.data.restaurants,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => FavoriteRestaurant)
  @nestAccessControl.UseRoles({
    resource: "FavoriteRestaurant",
    action: "update",
    possession: "any",
  })
  async updateFavoriteRestaurant(
    @graphql.Args() args: UpdateFavoriteRestaurantArgs
  ): Promise<FavoriteRestaurant | null> {
    try {
      return await this.service.updateFavoriteRestaurant({
        ...args,
        data: {
          ...args.data,

          favorites: args.data.favorites
            ? {
                connect: args.data.favorites,
              }
            : undefined,

          restaurants: args.data.restaurants
            ? {
                connect: args.data.restaurants,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => FavoriteRestaurant)
  @nestAccessControl.UseRoles({
    resource: "FavoriteRestaurant",
    action: "delete",
    possession: "any",
  })
  async deleteFavoriteRestaurant(
    @graphql.Args() args: DeleteFavoriteRestaurantArgs
  ): Promise<FavoriteRestaurant | null> {
    try {
      return await this.service.deleteFavoriteRestaurant(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Favorite, {
    nullable: true,
    name: "favorites",
  })
  @nestAccessControl.UseRoles({
    resource: "Favorite",
    action: "read",
    possession: "any",
  })
  async getFavorites(
    @graphql.Parent() parent: FavoriteRestaurant
  ): Promise<Favorite | null> {
    const result = await this.service.getFavorites(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Restaurant, {
    nullable: true,
    name: "restaurants",
  })
  @nestAccessControl.UseRoles({
    resource: "Restaurant",
    action: "read",
    possession: "any",
  })
  async getRestaurants(
    @graphql.Parent() parent: FavoriteRestaurant
  ): Promise<Restaurant | null> {
    const result = await this.service.getRestaurants(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
