/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field, Float } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsInt,
  IsOptional,
  IsString,
  ValidateNested,
  IsBoolean,
  IsNumber,
} from "class-validator";
import { FavoriteMenuItemCreateNestedManyWithoutMenuItemsInput } from "./FavoriteMenuItemCreateNestedManyWithoutMenuItemsInput";
import { Type } from "class-transformer";
import { MenuItemCategoryCreateNestedManyWithoutMenuItemsInput } from "./MenuItemCategoryCreateNestedManyWithoutMenuItemsInput";
import { MenuItemCategoryWhereUniqueInput } from "../../menuItemCategory/base/MenuItemCategoryWhereUniqueInput";
import { MenuWhereUniqueInput } from "../../menu/base/MenuWhereUniqueInput";
import { OrderItemCreateNestedManyWithoutMenuItemsInput } from "./OrderItemCreateNestedManyWithoutMenuItemsInput";
import { Decimal } from "decimal.js";

@InputType()
class MenuItemCreateInput {
  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  availableQuantity?: number | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  description?: string | null;

  @ApiProperty({
    required: false,
    type: () => FavoriteMenuItemCreateNestedManyWithoutMenuItemsInput,
  })
  @ValidateNested()
  @Type(() => FavoriteMenuItemCreateNestedManyWithoutMenuItemsInput)
  @IsOptional()
  @Field(() => FavoriteMenuItemCreateNestedManyWithoutMenuItemsInput, {
    nullable: true,
  })
  favoriteMenuItems?: FavoriteMenuItemCreateNestedManyWithoutMenuItemsInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  hashtags?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  imageUrl?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  ingredients?: string | null;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  isActive?: boolean | null;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  isVegetarian?: boolean | null;

  @ApiProperty({
    required: false,
    type: () => MenuItemCategoryCreateNestedManyWithoutMenuItemsInput,
  })
  @ValidateNested()
  @Type(() => MenuItemCategoryCreateNestedManyWithoutMenuItemsInput)
  @IsOptional()
  @Field(() => MenuItemCategoryCreateNestedManyWithoutMenuItemsInput, {
    nullable: true,
  })
  menuItemCategoriesMenuItemCategoriesMenuItemIdToMenuItems?: MenuItemCategoryCreateNestedManyWithoutMenuItemsInput;

  @ApiProperty({
    required: false,
    type: () => MenuItemCategoryWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => MenuItemCategoryWhereUniqueInput)
  @IsOptional()
  @Field(() => MenuItemCategoryWhereUniqueInput, {
    nullable: true,
  })
  menuItemCategoriesMenuItemsCategoryIdToMenuItemCategories?: MenuItemCategoryWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => MenuWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => MenuWhereUniqueInput)
  @IsOptional()
  @Field(() => MenuWhereUniqueInput, {
    nullable: true,
  })
  menus?: MenuWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string | null;

  @ApiProperty({
    required: false,
    type: () => OrderItemCreateNestedManyWithoutMenuItemsInput,
  })
  @ValidateNested()
  @Type(() => OrderItemCreateNestedManyWithoutMenuItemsInput)
  @IsOptional()
  @Field(() => OrderItemCreateNestedManyWithoutMenuItemsInput, {
    nullable: true,
  })
  orderItems?: OrderItemCreateNestedManyWithoutMenuItemsInput;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  preparationTime?: number | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @IsOptional()
  @Field(() => Float, {
    nullable: true,
  })
  price?: Decimal | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  shareSlug?: string | null;
}

export { MenuItemCreateInput as MenuItemCreateInput };
