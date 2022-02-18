import { RedisInterface } from "./redis.interface";
import { CaptchaInterface } from "./captcha.interface";
import { MailInterface } from "./mail.interface";

export interface MailCaptchaInterface {
  redis: RedisInterface;
  captcha: CaptchaInterface;
  mail: MailInterface;
}
