import { AccessLogCreateNestedManyWithoutUserModelsInput } from "./AccessLogCreateNestedManyWithoutUserModelsInput";
import { CouponRedemptionCreateNestedManyWithoutUserModelsInput } from "./CouponRedemptionCreateNestedManyWithoutUserModelsInput";
import { CustomerPreferenceCreateNestedManyWithoutUserModelsInput } from "./CustomerPreferenceCreateNestedManyWithoutUserModelsInput";
import { CustomerSubscriptionCreateNestedManyWithoutUserModelsInput } from "./CustomerSubscriptionCreateNestedManyWithoutUserModelsInput";
import { ErrorLogCreateNestedManyWithoutUserModelsInput } from "./ErrorLogCreateNestedManyWithoutUserModelsInput";
import { FavoriteCreateNestedManyWithoutUserModelsInput } from "./FavoriteCreateNestedManyWithoutUserModelsInput";
import { NotificationCreateNestedManyWithoutUserModelsInput } from "./NotificationCreateNestedManyWithoutUserModelsInput";
import { NotificationSettingCreateNestedManyWithoutUserModelsInput } from "./NotificationSettingCreateNestedManyWithoutUserModelsInput";
import { OrderCreateNestedManyWithoutUserModelsInput } from "./OrderCreateNestedManyWithoutUserModelsInput";
import { ReportCreateNestedManyWithoutUserModelsInput } from "./ReportCreateNestedManyWithoutUserModelsInput";
import { ReservationCreateNestedManyWithoutUserModelsInput } from "./ReservationCreateNestedManyWithoutUserModelsInput";
import { ReviewCreateNestedManyWithoutUserModelsInput } from "./ReviewCreateNestedManyWithoutUserModelsInput";
import { RewardCreateNestedManyWithoutUserModelsInput } from "./RewardCreateNestedManyWithoutUserModelsInput";
import { SubscriptionCreateNestedManyWithoutUserModelsInput } from "./SubscriptionCreateNestedManyWithoutUserModelsInput";
import { TransactionCreateNestedManyWithoutUserModelsInput } from "./TransactionCreateNestedManyWithoutUserModelsInput";
import { UserAddressCreateNestedManyWithoutUserModelsInput } from "./UserAddressCreateNestedManyWithoutUserModelsInput";
import { WishlistCreateNestedManyWithoutUserModelsInput } from "./WishlistCreateNestedManyWithoutUserModelsInput";

export type UserModelCreateInput = {
  accessLogs?: AccessLogCreateNestedManyWithoutUserModelsInput;
  appleSsoToken?: string | null;
  couponRedemptions?: CouponRedemptionCreateNestedManyWithoutUserModelsInput;
  customerPreferences?: CustomerPreferenceCreateNestedManyWithoutUserModelsInput;
  customerSubscriptions?: CustomerSubscriptionCreateNestedManyWithoutUserModelsInput;
  email: string;
  emailPassword: string;
  errorLogs?: ErrorLogCreateNestedManyWithoutUserModelsInput;
  facebookSsoToken?: string | null;
  favorites?: FavoriteCreateNestedManyWithoutUserModelsInput;
  googleSsoToken?: string | null;
  name?: string | null;
  notifications?: NotificationCreateNestedManyWithoutUserModelsInput;
  notificationSettings?: NotificationSettingCreateNestedManyWithoutUserModelsInput;
  orders?: OrderCreateNestedManyWithoutUserModelsInput;
  phoneNumber: string;
  reports?: ReportCreateNestedManyWithoutUserModelsInput;
  reservations?: ReservationCreateNestedManyWithoutUserModelsInput;
  reviews?: ReviewCreateNestedManyWithoutUserModelsInput;
  rewards?: RewardCreateNestedManyWithoutUserModelsInput;
  subscriptions?: SubscriptionCreateNestedManyWithoutUserModelsInput;
  transactions?: TransactionCreateNestedManyWithoutUserModelsInput;
  twitterSsoToken?: string | null;
  updatedAt?: Date | null;
  userAddresses?: UserAddressCreateNestedManyWithoutUserModelsInput;
  wishlist?: WishlistCreateNestedManyWithoutUserModelsInput;
};