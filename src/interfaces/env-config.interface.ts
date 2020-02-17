import { SequelizeOptions } from "sequelize-typescript";
import { RedisInterface } from "./redis.interface";
import { JwtOptionsInterface } from "./jwt-options.interface";
import { SmsInterface } from "./sms.interface";
import { PaymentMerchantInterface } from "./payment-merchant.interface";
import { MpInterface } from "./mp.interface";
import { OaInterface } from "./oa.interface";

interface JwtInterface {
  admin: JwtOptionsInterface;
  wx?: JwtOptionsInterface;
}

export interface EnvConfigInterface {
  port: number;
  baseUrl?: string;
  cdnUrl?: string;
  database?: SequelizeOptions;
  redis?: RedisInterface;
  jwt?: JwtInterface;
  sms?: SmsInterface;
  mp?: MpInterface;
  oa?: OaInterface;
  paymentMerchant?: PaymentMerchantInterface;
}
