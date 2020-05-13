export const baseDefaultConfig = {
  appName: "--",
  rateLimit: {
    windowMs: 15 * 60 * 1000,
    max: 10000
  },
  accessToken: {
    expiresIn: 1000 * 60 * 10
  },
  captcha: {
    expiresIn: 1000 * 60 * 10,
    waitExpiresIn: 1000 * 60 * 2
  },
  dictVersion: "v1.0",
  enableCos: false
};
