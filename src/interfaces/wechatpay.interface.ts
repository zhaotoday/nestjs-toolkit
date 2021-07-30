import { MpInterface } from "./mp.interface";
import { MerchantInterface } from "./merchant.interface";
import { OaInterface } from "./oa.interface";
import { AppInterface } from "./app.interface";

export interface WeChatPayInterface {
  mp?: MpInterface;
  oa?: OaInterface;
  app?: AppInterface;
  merchant: MerchantInterface;
}
