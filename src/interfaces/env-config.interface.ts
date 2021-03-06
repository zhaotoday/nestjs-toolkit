import { SequelizeOptions } from "sequelize-typescript";
import { RedisInterface } from "./redis.interface";
import { JwtOptionsInterface } from "./jwt-options.interface";
import { SmsInterface } from "./sms.interface";
import { CosInterface } from "./cos.interface";
import { MerchantInterface } from "./merchant.interface";
import { MpInterface } from "./mp.interface";
import { OaInterface } from "./oa.interface";
import { AppInterface } from "./app.interface";
import { TencentCloudInterface } from "./tencent-cloud.interface";
import { TmInterface } from "./tm.interface";

interface JwtInterface {
  admin: JwtOptionsInterface;
  wx?: JwtOptionsInterface;
}

export interface EnvConfigInterface {
  port: number;
  baseUrl?: string;
  cdnUrl?: string;
  enableCos?: boolean;
  database?: SequelizeOptions;
  redis?: RedisInterface;
  jwt?: JwtInterface;
  tc?: TencentCloudInterface;
  sms?: SmsInterface;
  tm?: TmInterface;
  cos?: CosInterface;
  mp?: MpInterface;
  oa?: OaInterface;
  app?: AppInterface;
  merchant?: MerchantInterface;
}
