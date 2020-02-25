import { Injectable } from "@nestjs/common";
import * as QCloudSms from "qcloudsms_js";
import { SmsInterface } from "../interfaces/sms.interface";
import { HelpersProvider } from "./helpers.provider";

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

  sendCaptcha({ phoneNumber }): string {
    const random = this.helpersProvider.getRandom(6);
    const params = ["绑定手机号", random, 10];

    this.sss.sendWithParam(
      86,
      phoneNumber,
      this._config.templateIds.captcha,
      params,
      this._config.sign,
      "",
      "",
      function() {}
    );

    return random;
  }
}
