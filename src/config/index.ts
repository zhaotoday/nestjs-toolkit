import { ConfigInterface } from "../interfaces/config.interface";
import { baseConfig } from "./base-config";
import { developmentConfig } from "./development-config";

export const config: ConfigInterface = ((): ConfigInterface => {
  switch (process.env.NODE_ENV) {
    case "development":
      return { ...baseConfig, ...developmentConfig };
    default:
      return { ...baseConfig, ...developmentConfig };
  }
})();
