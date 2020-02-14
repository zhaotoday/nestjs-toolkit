import { SequelizeOptions } from "sequelize-typescript";
import { RedisInterface } from "./redis.interface";
import { JwtOptionsInterface } from "./jwt-options.interface";
import { SmsInterface } from "./sms.interface";

interface JwtInterface {
  admin: JwtOptionsInterface;
  wx?: JwtOptionsInterface;
}

interface MpInterface {
  appId: string;
  secret: string;
}

interface OaInterface {
  appId: string;
  secret: string;
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
}
