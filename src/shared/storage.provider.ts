import { Injectable } from "@nestjs/common";
import { Schema } from "jugglingdb";
import { RedisProvider } from "./redis.provider";
import { StorageInterface } from "../interfaces/storage.interface";

@Injectable()
export class StorageProvider {
  public Model: Schema;

  private _config: StorageInterface;

  constructor(public redisProvider: RedisProvider) {}

  config(options: StorageInterface): StorageProvider {
    this._config = options;
    return this;
  }

  init(): StorageProvider {
    this.Model = this.redisProvider
      .config(this._config.redis)
      .init()
      .define("storage", {
        name: {
          type: String,
          length: 50,
          index: true
        },
        key: {
          type: String,
          length: 50,
          index: true
        },
        value: {
          type: String,
          length: 500
        }
      });
    return this;
  }

  async get(key): Promise<string | null> {
    const instances = (
      await this.Model.all({
        where: { name: this._config.name, key }
      })
    ).filter(item => item && item.id);

    return instances[0] && instances[0].id ? instances[0].value : null;
  }

  async set(key, value): Promise<void> {
    const { name, expiresIn } = this._config;
    const oldInstances = (
      await this.Model.all({
        where: { name, key }
      })
    ).filter(item => item && item.id);

    if (oldInstances[0] && oldInstances[0].id) {
      await oldInstances[0].destroy();
    }

    const newInstance = await this.Model.create({ name, key, value });

    if (expiresIn) {
      await newInstance.expiresIn(expiresIn);
    }
  }
}
