/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { Type } from "class-transformer";
import { IsOptional, ValidateNested } from "class-validator";
import { DecimalNullableFilter } from "../../util/DecimalNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { FavoriteRestaurantListRelationFilter } from "../../favoriteRestaurant/base/FavoriteRestaurantListRelationFilter";
import { IntFilter } from "../../util/IntFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { MenuListRelationFilter } from "../../menu/base/MenuListRelationFilter";
import { OrderListRelationFilter } from "../../order/base/OrderListRelationFilter";
import { ReservationListRelationFilter } from "../../reservation/base/ReservationListRelationFilter";
import { RestaurantDetailListRelationFilter } from "../../restaurantDetail/base/RestaurantDetailListRelationFilter";
import { ReviewListRelationFilter } from "../../review/base/ReviewListRelationFilter";

@InputType()
class RestaurantWhereInput {
  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  address?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: DecimalNullableFilter,
  })
  @Type(() => DecimalNullableFilter)
  @IsOptional()
  @Field(() => DecimalNullableFilter, {
    nullable: true,
  })
  averageCost?: DecimalNullableFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  closingHours?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: DateTimeNullableFilter,
  })
  @Type(() => DateTimeNullableFilter)
  @IsOptional()
  @Field(() => DateTimeNullableFilter, {
    nullable: true,
  })
  createdAt?: DateTimeNullableFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  email?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: () => FavoriteRestaurantListRelationFilter,
  })
  @ValidateNested()
  @Type(() => FavoriteRestaurantListRelationFilter)
  @IsOptional()
  @Field(() => FavoriteRestaurantListRelationFilter, {
    nullable: true,
  })
  favoriteRestaurants?: FavoriteRestaurantListRelationFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  filterTag?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  hashtags?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: IntFilter,
  })
  @Type(() => IntFilter)
  @IsOptional()
  @Field(() => IntFilter, {
    nullable: true,
  })
  id?: IntFilter;

  @ApiProperty({
    required: false,
    type: BooleanNullableFilter,
  })
  @Type(() => BooleanNullableFilter)
  @IsOptional()
  @Field(() => BooleanNullableFilter, {
    nullable: true,
  })
  isActive?: BooleanNullableFilter;

  @ApiProperty({
    required: false,
    type: () => MenuListRelationFilter,
  })
  @ValidateNested()
  @Type(() => MenuListRelationFilter)
  @IsOptional()
  @Field(() => MenuListRelationFilter, {
    nullable: true,
  })
  menus?: MenuListRelationFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  name?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  openingHours?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: () => OrderListRelationFilter,
  })
  @ValidateNested()
  @Type(() => OrderListRelationFilter)
  @IsOptional()
  @Field(() => OrderListRelationFilter, {
    nullable: true,
  })
  orders?: OrderListRelationFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  phoneNumber?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: () => ReservationListRelationFilter,
  })
  @ValidateNested()
  @Type(() => ReservationListRelationFilter)
  @IsOptional()
  @Field(() => ReservationListRelationFilter, {
    nullable: true,
  })
  reservations?: ReservationListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => RestaurantDetailListRelationFilter,
  })
  @ValidateNested()
  @Type(() => RestaurantDetailListRelationFilter)
  @IsOptional()
  @Field(() => RestaurantDetailListRelationFilter, {
    nullable: true,
  })
  restaurantDetails?: RestaurantDetailListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => ReviewListRelationFilter,
  })
  @ValidateNested()
  @Type(() => ReviewListRelationFilter)
  @IsOptional()
  @Field(() => ReviewListRelationFilter, {
    nullable: true,
  })
  reviews?: ReviewListRelationFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  shareSlug?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: DateTimeNullableFilter,
  })
  @Type(() => DateTimeNullableFilter)
  @IsOptional()
  @Field(() => DateTimeNullableFilter, {
    nullable: true,
  })
  updatedAt?: DateTimeNullableFilter;
}

export { RestaurantWhereInput as RestaurantWhereInput };