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
import { AccessLog } from "../../accessLog/base/AccessLog";
import {
  ValidateNested,
  IsOptional,
  IsString,
  IsDate,
  IsInt,
} from "class-validator";
import { Type } from "class-transformer";
import { CouponRedemption } from "../../couponRedemption/base/CouponRedemption";
import { CustomerPreference } from "../../customerPreference/base/CustomerPreference";
import { CustomerSubscription } from "../../customerSubscription/base/CustomerSubscription";
import { ErrorLog } from "../../errorLog/base/ErrorLog";
import { Favorite } from "../../favorite/base/Favorite";
import { Notification } from "../../notification/base/Notification";
import { NotificationSetting } from "../../notificationSetting/base/NotificationSetting";
import { Order } from "../../order/base/Order";
import { Report } from "../../report/base/Report";
import { Reservation } from "../../reservation/base/Reservation";
import { Review } from "../../review/base/Review";
import { Reward } from "../../reward/base/Reward";
import { Subscription } from "../../subscription/base/Subscription";
import { Transaction } from "../../transaction/base/Transaction";
import { UserAddress } from "../../userAddress/base/UserAddress";
import { Wishlist } from "../../wishlist/base/Wishlist";

@ObjectType()
class UserModel {
  @ApiProperty({
    required: false,
    type: () => [AccessLog],
  })
  @ValidateNested()
  @Type(() => AccessLog)
  @IsOptional()
  accessLogs?: Array<AccessLog>;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  appleSsoToken!: string | null;

  @ApiProperty({
    required: false,
    type: () => [CouponRedemption],
  })
  @ValidateNested()
  @Type(() => CouponRedemption)
  @IsOptional()
  couponRedemptions?: Array<CouponRedemption>;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  createdAt!: Date | null;

  @ApiProperty({
    required: false,
    type: () => [CustomerPreference],
  })
  @ValidateNested()
  @Type(() => CustomerPreference)
  @IsOptional()
  customerPreferences?: Array<CustomerPreference>;

  @ApiProperty({
    required: false,
    type: () => [CustomerSubscription],
  })
  @ValidateNested()
  @Type(() => CustomerSubscription)
  @IsOptional()
  customerSubscriptions?: Array<CustomerSubscription>;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  email!: string;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  emailPassword!: string;

  @ApiProperty({
    required: false,
    type: () => [ErrorLog],
  })
  @ValidateNested()
  @Type(() => ErrorLog)
  @IsOptional()
  errorLogs?: Array<ErrorLog>;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  facebookSsoToken!: string | null;

  @ApiProperty({
    required: false,
    type: () => [Favorite],
  })
  @ValidateNested()
  @Type(() => Favorite)
  @IsOptional()
  favorites?: Array<Favorite>;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  googleSsoToken!: string | null;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsInt()
  @Field(() => Number)
  id!: number;

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

  @ApiProperty({
    required: false,
    type: () => [Notification],
  })
  @ValidateNested()
  @Type(() => Notification)
  @IsOptional()
  notifications?: Array<Notification>;

  @ApiProperty({
    required: false,
    type: () => [NotificationSetting],
  })
  @ValidateNested()
  @Type(() => NotificationSetting)
  @IsOptional()
  notificationSettings?: Array<NotificationSetting>;

  @ApiProperty({
    required: false,
    type: () => [Order],
  })
  @ValidateNested()
  @Type(() => Order)
  @IsOptional()
  orders?: Array<Order>;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  phoneNumber!: string;

  @ApiProperty({
    required: false,
    type: () => [Report],
  })
  @ValidateNested()
  @Type(() => Report)
  @IsOptional()
  reports?: Array<Report>;

  @ApiProperty({
    required: false,
    type: () => [Reservation],
  })
  @ValidateNested()
  @Type(() => Reservation)
  @IsOptional()
  reservations?: Array<Reservation>;

  @ApiProperty({
    required: false,
    type: () => [Review],
  })
  @ValidateNested()
  @Type(() => Review)
  @IsOptional()
  reviews?: Array<Review>;

  @ApiProperty({
    required: false,
    type: () => [Reward],
  })
  @ValidateNested()
  @Type(() => Reward)
  @IsOptional()
  rewards?: Array<Reward>;

  @ApiProperty({
    required: false,
    type: () => [Subscription],
  })
  @ValidateNested()
  @Type(() => Subscription)
  @IsOptional()
  subscriptions?: Array<Subscription>;

  @ApiProperty({
    required: false,
    type: () => [Transaction],
  })
  @ValidateNested()
  @Type(() => Transaction)
  @IsOptional()
  transactions?: Array<Transaction>;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  twitterSsoToken!: string | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  updatedAt!: Date | null;

  @ApiProperty({
    required: false,
    type: () => [UserAddress],
  })
  @ValidateNested()
  @Type(() => UserAddress)
  @IsOptional()
  userAddresses?: Array<UserAddress>;

  @ApiProperty({
    required: false,
    type: () => [Wishlist],
  })
  @ValidateNested()
  @Type(() => Wishlist)
  @IsOptional()
  wishlist?: Array<Wishlist>;
}

export { UserModel as UserModel };