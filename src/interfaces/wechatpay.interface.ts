import { MpInterface } from "./mp.interface";
import { MerchantInterface } from "./merchant.interface";
import { OaInterface } from "./oa.interface";

export interface WeChatPayInterface {
  mp: MpInterface;
  oa: OaInterface;
  merchant: MerchantInterface;
}
