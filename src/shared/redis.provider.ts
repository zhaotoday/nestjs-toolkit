import { Schema } from "jugglingdb";
import { Injectable } from "@nestjs/common";

@Injectable()
export class RedisProvider {
  public schema: Schema;

  private _config;

  config(options): RedisProvider {
    this._config = options;
    return this;
  }

  init(): RedisProvider {
    const { host, port, password } = this._config;
    this.schema = new Schema("redis", { host, port, password });
    return this;
  }

  define(name, attributes): Schema {
    const { database } = this._config;
    const schema = this.schema;
    const Model = schema.define(`${database}:${name}`, attributes);

    Model.prototype.expiresIn = function (time): Schema {
      schema.client.expire(`${database}:${name}:${this.id}`, time / 1000);

      return this;
    };

    return Model;
  }
}
