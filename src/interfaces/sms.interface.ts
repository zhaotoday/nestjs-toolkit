import { SmsTemplateIdsInterface } from "./sms-template-ids.interface";

export interface SmsInterface {
  appId: string;
  appKey: string;
  sign: string;
  templateIds: SmsTemplateIdsInterface;
}
