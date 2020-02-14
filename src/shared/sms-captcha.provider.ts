import { StorageProvider } from "./storage.provider";
import {
  Injectable,
  NotAcceptableException,
  NotFoundException
} from "@nestjs/common";
import { config } from "../config";
import { SmsProvider } from "./sms.provider";

@Injectable()
export class SmsCaptchaProvider {
  constructor(
    public storageProvider: StorageProvider,
    public waitStorageProvider: StorageProvider,
    public smsProvider: SmsProvider
  ) {
    this.storageProvider
      .config({
        redis: config.redis,
        name: "smsCaptcha",
        expiresIn: config.captcha.expiresIn
      })
      .init();

    this.waitStorageProvider
      .config({
        redis: config.redis,
        name: "smsCaptchaWait",
        expiresIn: config.captcha.waitExpiresIn
      })
      .init();

    this.smsProvider.config(config.sms).init();
  }

  async send(phoneNumber): Promise<object | unknown> {
    const waitStorageRes = await this.storageProvider.get(phoneNumber);

    if (waitStorageRes) {
      throw new NotAcceptableException("操作过于频繁，请稍后再试");
    } else {
      const captcha = this.smsProvider.sendCaptcha({ phoneNumber });

      await this.storageProvider.set(phoneNumber, captcha);
      await this.waitStorageProvider.set(phoneNumber, captcha);

      return { phoneNumber, captcha };
    }
  }

  async verify(phoneNumber, captcha): Promise<object | unknown> {
    const storageRes = await this.storageProvider.get(phoneNumber);

    if (!storageRes) {
      throw new NotFoundException("验证码不存在");
    } else if (captcha !== storageRes) {
      throw new NotFoundException("短信验证码错误");
    } else {
      return { phoneNumber, captcha };
    }
  }
}
