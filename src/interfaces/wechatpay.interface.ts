import { MpInterface } from "./mp.interface";
import { MerchantInterface } from "./merchant.interface";

export interface WeChatPayInterface {
  mp: MpInterface;
  merchant: MerchantInterface;
}
