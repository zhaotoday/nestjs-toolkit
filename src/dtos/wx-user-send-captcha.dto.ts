import { ApiProperty } from "@nestjs/swagger";

export class WxUserSendCaptchaDto {
  @ApiProperty({
    description: "手机号",
    example: "13950442340"
  })
  phoneNumber: string;
}
