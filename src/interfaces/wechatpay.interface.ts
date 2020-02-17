import { MpInterface } from "./mp.interface";
import { PaymentMerchantInterface } from "./payment-merchant.interface";

export interface WeChatPayInterface {
  mp: MpInterface;
  paymentMerchant: PaymentMerchantInterface;
}
