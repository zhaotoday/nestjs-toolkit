import { BaseConfigInterface } from "./base-config.interface";
import { EnvConfigInterface } from "./env-config.interface";

export interface ConfigInterface extends BaseConfigInterface, EnvConfigInterface {}
