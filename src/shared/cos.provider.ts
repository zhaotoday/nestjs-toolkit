import { Injectable } from "@nestjs/common";
import * as Cos from "cos-nodejs-sdk-v5";

@Injectable()
export class CosProvider {
  public cos;

  private _config;

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
          FilePath: filePath,
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
