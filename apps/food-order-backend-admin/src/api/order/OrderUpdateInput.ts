import { CouponWhereUniqueInput } from "../coupon/CouponWhereUniqueInput";
import { Decimal } from "decimal.js";
import { OrderItemUpdateManyWithoutOrdersInput } from "./OrderItemUpdateManyWithoutOrdersInput";
import { PaymentMethodWhereUniqueInput } from "../paymentMethod/PaymentMethodWhereUniqueInput";
import { PaymentUpdateManyWithoutOrdersInput } from "./PaymentUpdateManyWithoutOrdersInput";
import { RestaurantWhereUniqueInput } from "../restaurant/RestaurantWhereUniqueInput";
import { TransactionUpdateManyWithoutOrdersInput } from "./TransactionUpdateManyWithoutOrdersInput";
import { UserAddressWhereUniqueInput } from "../userAddress/UserAddressWhereUniqueInput";
import { UserModelWhereUniqueInput } from "../userModel/UserModelWhereUniqueInput";

export type OrderUpdateInput = {
  coupons?: CouponWhereUniqueInput | null;
  deliveryTime?: Date | null;
  discountAmount?: Decimal | null;
  finalAmount?: Decimal | null;
  isDelivered?: boolean | null;
  isPaid?: boolean | null;
  orderItems?: OrderItemUpdateManyWithoutOrdersInput;
  orderType?: string | null;
  paymentMethods?: PaymentMethodWhereUniqueInput | null;
  payments?: PaymentUpdateManyWithoutOrdersInput;
  restaurants?: RestaurantWhereUniqueInput | null;
  scheduledDeliveryTime?: Date | null;
  specialInstructions?: string | null;
  status?: string | null;
  totalAmount?: Decimal | null;
  transactions?: TransactionUpdateManyWithoutOrdersInput;
  userAddresses?: UserAddressWhereUniqueInput | null;
  userModels?: UserModelWhereUniqueInput | null;
};
