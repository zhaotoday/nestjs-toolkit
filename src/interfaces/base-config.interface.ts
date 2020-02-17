import { CaptchaInterface } from "./captcha.interface";

interface RateLimitInterface {
  windowMs: number;
  max: number;
}

interface AccessTokenInterface {
  expiresIn: number;
}

export interface BaseConfigInterface {
  appName?: string;
  rateLimit: RateLimitInterface;
  accessToken: AccessTokenInterface;
  captcha?: CaptchaInterface;
  dictVersion?: string;
}
