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
import { GeoLocationWhereInput } from "./GeoLocationWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { GeoLocationOrderByInput } from "./GeoLocationOrderByInput";

@ArgsType()
class GeoLocationFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => GeoLocationWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => GeoLocationWhereInput, { nullable: true })
  @Type(() => GeoLocationWhereInput)
  where?: GeoLocationWhereInput;

  @ApiProperty({
    required: false,
    type: [GeoLocationOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [GeoLocationOrderByInput], { nullable: true })
  @Type(() => GeoLocationOrderByInput)
  orderBy?: Array<GeoLocationOrderByInput>;

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

export { GeoLocationFindManyArgs as GeoLocationFindManyArgs };
