/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  MenuItemCategory, // @ts-ignore
  MenuItem,
} from "@prisma/client";

export class MenuItemCategoryServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.MenuItemCategoryCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.MenuItemCategoryCountArgs>
  ): Promise<number> {
    return this.prisma.menuItemCategory.count(args);
  }

  async menuItemCategories<T extends Prisma.MenuItemCategoryFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.MenuItemCategoryFindManyArgs>
  ): Promise<MenuItemCategory[]> {
    return this.prisma.menuItemCategory.findMany(args);
  }
  async menuItemCategory<T extends Prisma.MenuItemCategoryFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.MenuItemCategoryFindUniqueArgs>
  ): Promise<MenuItemCategory | null> {
    return this.prisma.menuItemCategory.findUnique(args);
  }
  async createMenuItemCategory<T extends Prisma.MenuItemCategoryCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.MenuItemCategoryCreateArgs>
  ): Promise<MenuItemCategory> {
    return this.prisma.menuItemCategory.create<T>(args);
  }
  async updateMenuItemCategory<T extends Prisma.MenuItemCategoryUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.MenuItemCategoryUpdateArgs>
  ): Promise<MenuItemCategory> {
    return this.prisma.menuItemCategory.update<T>(args);
  }
  async deleteMenuItemCategory<T extends Prisma.MenuItemCategoryDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.MenuItemCategoryDeleteArgs>
  ): Promise<MenuItemCategory> {
    return this.prisma.menuItemCategory.delete(args);
  }

  async findMenuItemsMenuItemsCategoryIdToMenuItemCategories(
    parentId: number,
    args: Prisma.MenuItemFindManyArgs
  ): Promise<MenuItem[]> {
    return this.prisma.menuItemCategory
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .menuItemsMenuItemsCategoryIdToMenuItemCategories(args);
  }

  async getMenuItemsMenuItemCategoriesMenuItemIdToMenuItems(
    parentId: number
  ): Promise<MenuItem | null> {
    return this.prisma.menuItemCategory
      .findUnique({
        where: { id: parentId },
      })
      .menuItemsMenuItemCategoriesMenuItemIdToMenuItems();
  }
}
