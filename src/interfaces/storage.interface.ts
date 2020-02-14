import { RedisInterface } from "./redis.interface";

export interface StorageInterface {
  redis: RedisInterface;
  name: string;
  expiresIn?: number;
}
