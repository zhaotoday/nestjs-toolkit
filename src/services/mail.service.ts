import { Injectable } from "@nestjs/common";
import { MailerService } from "@nestjs-modules/mailer";
import { config } from "../config";

@Injectable()
export class MailService {
  constructor(private readonly mailerService: MailerService) {}

  public send({ to, subject, text, html }): Promise<void> {
    return this.mailerService.sendMail({
      to,
      from: config.mail.user,
      subject,
      text,
      html,
    });
  }
}
