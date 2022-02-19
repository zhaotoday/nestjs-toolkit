import { StorageProvider } from "./storage.provider";
import {
  Injectable,
  NotAcceptableException,
  NotFoundException
} from "@nestjs/common";
import { SmsProvider } from "./sms.provider";

@Injectable()
export class SmsCaptchaProvider {
  private _config;

  constructor(
    public storageProvider: StorageProvider,
    public waitStorageProvider: StorageProvider,
    public smsProvider: SmsProvider
  ) {}

  config(options): SmsCaptchaProvider {
    this._config = options;
    return this;
  }

  init(): SmsCaptchaProvider {
    const { redis, captcha, sms } = this._config;

    this.storageProvider
      .config({
        redis,
        name: "smsCaptcha",
        expiresIn: captcha.expiresIn
      })
      .init();

    this.waitStorageProvider
      .config({
        redis,
        name: "smsCaptchaWait",
        expiresIn: captcha.waitExpiresIn
      })
      .init();

    this.smsProvider.config(sms).init();

    return this;
  }

  async send({ phoneNumber }): Promise<object | unknown> {
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

  async verify({ phoneNumber, captcha }): Promise<object | unknown> {
    const storageRes = await this.storageProvider.get(phoneNumber);

    if (!storageRes) {
      throw new NotFoundException("验证码不存在");
    } else if (captcha !== storageRes) {
      throw new NotFoundException("验证码错误");
    } else {
      return { phoneNumber, captcha };
    }
  }
}
