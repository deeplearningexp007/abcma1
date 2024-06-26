import { CouponWhereUniqueInput } from "../coupon/CouponWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { DecimalNullableFilter } from "../../util/DecimalNullableFilter";
import { IntFilter } from "../../util/IntFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { OrderItemListRelationFilter } from "../orderItem/OrderItemListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { PaymentMethodWhereUniqueInput } from "../paymentMethod/PaymentMethodWhereUniqueInput";
import { PaymentListRelationFilter } from "../payment/PaymentListRelationFilter";
import { RestaurantWhereUniqueInput } from "../restaurant/RestaurantWhereUniqueInput";
import { TransactionListRelationFilter } from "../transaction/TransactionListRelationFilter";
import { UserAddressWhereUniqueInput } from "../userAddress/UserAddressWhereUniqueInput";
import { UserModelWhereUniqueInput } from "../userModel/UserModelWhereUniqueInput";

export type OrderWhereInput = {
  coupons?: CouponWhereUniqueInput;
  deliveryTime?: DateTimeNullableFilter;
  discountAmount?: DecimalNullableFilter;
  finalAmount?: DecimalNullableFilter;
  id?: IntFilter;
  isDelivered?: BooleanNullableFilter;
  isPaid?: BooleanNullableFilter;
  orderDate?: DateTimeNullableFilter;
  orderItems?: OrderItemListRelationFilter;
  orderType?: StringNullableFilter;
  paymentMethods?: PaymentMethodWhereUniqueInput;
  payments?: PaymentListRelationFilter;
  restaurants?: RestaurantWhereUniqueInput;
  scheduledDeliveryTime?: DateTimeNullableFilter;
  specialInstructions?: StringNullableFilter;
  status?: StringNullableFilter;
  totalAmount?: DecimalNullableFilter;
  transactions?: TransactionListRelationFilter;
  userAddresses?: UserAddressWhereUniqueInput;
  userModels?: UserModelWhereUniqueInput;
};
