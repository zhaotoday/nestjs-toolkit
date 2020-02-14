import { BaseConfigInterface } from "../interfaces/base-config.interface";

export const baseConfig: BaseConfigInterface = {
  appName: "示例项目",
  rateLimit: {
    windowMs: 15 * 60 * 1000,
    max: 100
  },
  accessToken: {
    expiresIn: 1000 * 60 * 10
  },
  captcha: {
    expiresIn: 1000 * 60 * 10,
    waitExpiresIn: 1000 * 60 * 2
  }
};
