/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { CustomerPreferenceWhereInput } from "./CustomerPreferenceWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { CustomerPreferenceOrderByInput } from "./CustomerPreferenceOrderByInput";

@ArgsType()
class CustomerPreferenceFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => CustomerPreferenceWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => CustomerPreferenceWhereInput, { nullable: true })
  @Type(() => CustomerPreferenceWhereInput)
  where?: CustomerPreferenceWhereInput;

  @ApiProperty({
    required: false,
    type: [CustomerPreferenceOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [CustomerPreferenceOrderByInput], { nullable: true })
  @Type(() => CustomerPreferenceOrderByInput)
  orderBy?: Array<CustomerPreferenceOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { CustomerPreferenceFindManyArgs as CustomerPreferenceFindManyArgs };