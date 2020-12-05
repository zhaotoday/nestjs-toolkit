import { RedisInterface } from "./redis.interface";
import { CaptchaInterface } from "./captcha.interface";
import { SmsInterface } from "./sms.interface";

export interface SmsCaptchaInterface {
  redis: RedisInterface;
  captcha: CaptchaInterface;
  sms: SmsInterface;
}
