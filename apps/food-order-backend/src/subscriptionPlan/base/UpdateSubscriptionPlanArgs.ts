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
import { SubscriptionPlanWhereUniqueInput } from "./SubscriptionPlanWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { SubscriptionPlanUpdateInput } from "./SubscriptionPlanUpdateInput";

@ArgsType()
class UpdateSubscriptionPlanArgs {
  @ApiProperty({
    required: true,
    type: () => SubscriptionPlanWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => SubscriptionPlanWhereUniqueInput)
  @Field(() => SubscriptionPlanWhereUniqueInput, { nullable: false })
  where!: SubscriptionPlanWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => SubscriptionPlanUpdateInput,
  })
  @ValidateNested()
  @Type(() => SubscriptionPlanUpdateInput)
  @Field(() => SubscriptionPlanUpdateInput, { nullable: false })
  data!: SubscriptionPlanUpdateInput;
}

export { UpdateSubscriptionPlanArgs as UpdateSubscriptionPlanArgs };
