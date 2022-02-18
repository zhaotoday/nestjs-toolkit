import { RedisInterface } from "./redis.interface";
import { CaptchaInterface } from "./captcha.interface";

export interface SvgCaptchaInterface {
  redis: RedisInterface;
  captcha: CaptchaInterface;
}
