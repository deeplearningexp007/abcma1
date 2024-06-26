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
import {
  IsBoolean,
  IsOptional,
  ValidateNested,
  IsDate,
  IsString,
} from "class-validator";
import { CustomerSubscriptionUpdateManyWithoutSubscriptionsInput } from "./CustomerSubscriptionUpdateManyWithoutSubscriptionsInput";
import { Type } from "class-transformer";
import { SubscriptionPlanWhereUniqueInput } from "../../subscriptionPlan/base/SubscriptionPlanWhereUniqueInput";
import { UserModelWhereUniqueInput } from "../../userModel/base/UserModelWhereUniqueInput";

@InputType()
class SubscriptionUpdateInput {
  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  autoRenew?: boolean;

  @ApiProperty({
    required: false,
    type: () => CustomerSubscriptionUpdateManyWithoutSubscriptionsInput,
  })
  @ValidateNested()
  @Type(() => CustomerSubscriptionUpdateManyWithoutSubscriptionsInput)
  @IsOptional()
  @Field(() => CustomerSubscriptionUpdateManyWithoutSubscriptionsInput, {
    nullable: true,
  })
  customerSubscriptions?: CustomerSubscriptionUpdateManyWithoutSubscriptionsInput;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  endDate?: Date | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  paymentStatus?: string;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  startDate?: Date;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  status?: string;

  @ApiProperty({
    required: false,
    type: () => SubscriptionPlanWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => SubscriptionPlanWhereUniqueInput)
  @IsOptional()
  @Field(() => SubscriptionPlanWhereUniqueInput, {
    nullable: true,
  })
  subscriptionPlans?: SubscriptionPlanWhereUniqueInput;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  updatedAt?: Date | null;

  @ApiProperty({
    required: false,
    type: () => UserModelWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UserModelWhereUniqueInput)
  @IsOptional()
  @Field(() => UserModelWhereUniqueInput, {
    nullable: true,
  })
  userModels?: UserModelWhereUniqueInput;
}

export { SubscriptionUpdateInput as SubscriptionUpdateInput };
