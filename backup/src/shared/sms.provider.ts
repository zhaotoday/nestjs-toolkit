import { Injectable } from "@nestjs/common";
import { SmsInterface } from "../interfaces/sms.interface";
import { HelpersProvider } from "./helpers.provider";

const QCloudSms = require("qcloudsms_js");

@Injectable()
export class SmsProvider {
  public sms: any;

  public sss: any;

  private _config: SmsInterface;

  constructor(public helpersProvider: HelpersProvider) {}

  config(options): SmsProvider {
    this._config = options;
    return this;
  }

  init(): SmsProvider {
    const { appId, appKey } = this._config;

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
      this._config.sign,
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
      this._config.templateIds.captcha,
      params,
      this._config.sign,
      "",
      "",
      function () {}
    );

    return random;
  }
}
