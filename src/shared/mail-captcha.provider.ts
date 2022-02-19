import {
  HelpersProvider,
  MailCaptchaInterface,
  StorageProvider,
} from "nestjs-toolkit";
import {
  Injectable,
  NotAcceptableException,
  NotFoundException,
} from "@nestjs/common";
import { MailService } from "../services/mail.service";

@Injectable()
export class MailCaptchaProvider {
  private _config: MailCaptchaInterface;

  constructor(
    public mailService: MailService,
    public storageProvider: StorageProvider,
    public waitStorageProvider: StorageProvider,
    public helpersProvider: HelpersProvider
  ) {}

  config(options: MailCaptchaInterface): MailCaptchaProvider {
    this._config = options;
    return this;
  }

  init(): MailCaptchaProvider {
    const { redis, captcha } = this._config;

    this.storageProvider
      .config({
        redis,
        name: "mailCaptcha",
        expiresIn: captcha.expiresIn,
      })
      .init();

    this.waitStorageProvider
      .config({
        redis,
        name: "mailCaptchaWait",
        expiresIn: captcha.waitExpiresIn,
      })
      .init();

    return this;
  }

  async send({ mail }): Promise<object | unknown> {
    const waitStorageRes = await this.storageProvider.get(mail);

    if (waitStorageRes) {
      throw new NotAcceptableException("操作过于频繁，请稍后再试");
    } else {
      const captcha = this.helpersProvider.getRandom(6);

      await this.mailService.send({
        to: mail,
        subject: "邮箱验证码",
        text: "",
        html: `验证码：${captcha}，有效期 10 分钟。如非本人操作，请忽略。`,
      });

      await this.storageProvider.set(mail, captcha);
      await this.waitStorageProvider.set(mail, captcha);

      return { mail, captcha };
    }
  }

  async verify({ mail, captcha }): Promise<object | unknown> {
    const storageRes = await this.storageProvider.get(mail);

    if (!storageRes) {
      throw new NotFoundException("验证码不存在");
    } else if (captcha !== storageRes) {
      throw new NotFoundException("验证码错误");
    } else {
      return { mail, captcha };
    }
  }
}
