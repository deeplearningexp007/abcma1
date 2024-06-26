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
import { CouponWhereInput } from "./CouponWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { CouponOrderByInput } from "./CouponOrderByInput";

@ArgsType()
class CouponFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => CouponWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => CouponWhereInput, { nullable: true })
  @Type(() => CouponWhereInput)
  where?: CouponWhereInput;

  @ApiProperty({
    required: false,
    type: [CouponOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [CouponOrderByInput], { nullable: true })
  @Type(() => CouponOrderByInput)
  orderBy?: Array<CouponOrderByInput>;

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

export { CouponFindManyArgs as CouponFindManyArgs };
