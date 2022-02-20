import { Injectable } from "@nestjs/common";
import { HelpersProvider } from "./helpers.provider";
import * as QCloudSms from "qcloudsms_js";

@Injectable()
export class SmsProvider {
  public sms: any;

  public sss: any;

  private _config;

  constructor(public helpersProvider: HelpersProvider) {}

  config(options): SmsProvider {
    this._config = options;
    return this;
  }

  init(): SmsProvider {
    const {
      config: { appId, appKey },
    } = this._config;

    this.sms = QCloudSms(appId, appKey);
    this.sss = this.sms.SmsSingleSender();

    return this;
  }

  send({ phoneNumber, templateId, params }): void {
    this.sss.sendWithParam(
      86,
      phoneNumber,
      templateId,
      params,
      this._config.config.sign,
      "",
      "",
      function () {}
    );
  }

  sendCaptcha({ phoneNumber }): string {
    const random = this.helpersProvider.getRandom(6);
    const params = [random, "10"];

    this.sss.sendWithParam(
      86,
      phoneNumber,
      this._config.captcha.templateId,
      params,
      this._config.config.sign,
      "",
      "",
      function () {}
    );

    return random;
  }
}
