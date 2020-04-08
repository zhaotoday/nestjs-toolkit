import { Injectable } from "@nestjs/common";
import { CosInterface } from "../interfaces/cos.interface";

const Cos = require("cos-nodejs-sdk-v5");

@Injectable()
export class CosProvider {
  public cos: any;

  private _config: CosInterface;

  config(options): CosProvider {
    this._config = options;
    return this;
  }

  init(): CosProvider {
    const { secretId, secretKey } = this._config;
    this.cos = new Cos({ SecretId: secretId, SecretKey: secretKey });
    return this;
  }

  async sliceUploadFile({ filePath, key }) {
    const { bucket, region } = this._config;

    return new Promise((resolve, reject) => {
      this.cos.sliceUploadFile(
        {
          Bucket: bucket,
          Region: region,
          Key: key,
          FilePath: filePath
        },
        (err, data) => {
          if (err) {
            reject(err);
          } else {
            resolve(data);
          }
        }
      );
    });
  }
}
