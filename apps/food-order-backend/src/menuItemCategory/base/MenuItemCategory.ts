/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsInt, ValidateNested, IsOptional, IsString } from "class-validator";
import { MenuItem } from "../../menuItem/base/MenuItem";
import { Type } from "class-transformer";

@ObjectType()
class MenuItemCategory {
  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsInt()
  @Field(() => Number)
  id!: number;

  @ApiProperty({
    required: false,
    type: () => MenuItem,
  })
  @ValidateNested()
  @Type(() => MenuItem)
  @IsOptional()
  menuItemsMenuItemCategoriesMenuItemIdToMenuItems?: MenuItem | null;

  @ApiProperty({
    required: false,
    type: () => [MenuItem],
  })
  @ValidateNested()
  @Type(() => MenuItem)
  @IsOptional()
  menuItemsMenuItemsCategoryIdToMenuItemCategories?: Array<MenuItem>;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name!: string | null;
}

export { MenuItemCategory as MenuItemCategory };