/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { CustomerSubscriptionWhereUniqueInput } from "../../customerSubscription/base/CustomerSubscriptionWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class CustomerSubscriptionUpdateManyWithoutUserModelsInput {
  @Field(() => [CustomerSubscriptionWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [CustomerSubscriptionWhereUniqueInput],
  })
  connect?: Array<CustomerSubscriptionWhereUniqueInput>;

  @Field(() => [CustomerSubscriptionWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [CustomerSubscriptionWhereUniqueInput],
  })
  disconnect?: Array<CustomerSubscriptionWhereUniqueInput>;

  @Field(() => [CustomerSubscriptionWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [CustomerSubscriptionWhereUniqueInput],
  })
  set?: Array<CustomerSubscriptionWhereUniqueInput>;
}

export { CustomerSubscriptionUpdateManyWithoutUserModelsInput as CustomerSubscriptionUpdateManyWithoutUserModelsInput };
