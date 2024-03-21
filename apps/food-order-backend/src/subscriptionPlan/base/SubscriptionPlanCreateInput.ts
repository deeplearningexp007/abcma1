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
import { CustomerSubscriptionCreateNestedManyWithoutSubscriptionPlansInput } from "./CustomerSubscriptionCreateNestedManyWithoutSubscriptionPlansInput";
import {
  ValidateNested,
  IsOptional,
  IsString,
  IsInt,
  IsBoolean,
  IsNumber,
  IsDate,
} from "class-validator";
import { Type } from "class-transformer";
import { Decimal } from "decimal.js";
import { SubscriptionCreateNestedManyWithoutSubscriptionPlansInput } from "./SubscriptionCreateNestedManyWithoutSubscriptionPlansInput";

@InputType()
class SubscriptionPlanCreateInput {
  @ApiProperty({
    required: false,
    type: () =>
      CustomerSubscriptionCreateNestedManyWithoutSubscriptionPlansInput,
  })
  @ValidateNested()
  @Type(() => CustomerSubscriptionCreateNestedManyWithoutSubscriptionPlansInput)
  @IsOptional()
  @Field(
    () => CustomerSubscriptionCreateNestedManyWithoutSubscriptionPlansInput,
    {
      nullable: true,
    }
  )
  customerSubscriptions?: CustomerSubscriptionCreateNestedManyWithoutSubscriptionPlansInput;

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
    required: true,
    type: Number,
  })
  @IsInt()
  @Field(() => Number)
  duration!: number;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  durationUnit!: string;

  @ApiProperty({
    required: true,
    type: Boolean,
  })
  @IsBoolean()
  @Field(() => Boolean)
  isActive!: boolean;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  name!: string;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsNumber()
  @Field(() => Float)
  price!: Decimal;

  @ApiProperty({
    required: false,
    type: () => SubscriptionCreateNestedManyWithoutSubscriptionPlansInput,
  })
  @ValidateNested()
  @Type(() => SubscriptionCreateNestedManyWithoutSubscriptionPlansInput)
  @IsOptional()
  @Field(() => SubscriptionCreateNestedManyWithoutSubscriptionPlansInput, {
    nullable: true,
  })
  subscriptions?: SubscriptionCreateNestedManyWithoutSubscriptionPlansInput;

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
}

export { SubscriptionPlanCreateInput as SubscriptionPlanCreateInput };
