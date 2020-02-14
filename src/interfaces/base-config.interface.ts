interface RateLimitInterface {
  windowMs: number;
  max: number;
}

interface AccessTokenInterface {
  expiresIn: number;
}

interface CaptchaInterface {
  expiresIn: number;
  waitExpiresIn: number;
}

export interface BaseConfigInterface {
  appName?: string;
  rateLimit: RateLimitInterface;
  accessToken: AccessTokenInterface;
  captcha?: CaptchaInterface;
}
