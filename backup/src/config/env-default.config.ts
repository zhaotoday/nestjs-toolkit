import { EnvConfigInterface } from "../interfaces/env-config.interface";

export const envDefaultConfig: EnvConfigInterface = {
  sms: {
    appId: "",
    appKey: "",
    sign: "",
    templateIds: {
      captcha: 1,
    },
  },
  tc: {
    secretId: "",
    secretKey: "",
  },
  cos: {
    region: "",
    bucket: "",
  },
  mp: {
    appId: "",
    secret: "",
  },
  oa: {
    appId: "",
    secret: "",
  },
  app: {
    appId: "",
    secret: "",
  },
  merchant: {
    mchId: "",
    secret: "",
    body: "",
    notifyUrl: "",
  },
};
