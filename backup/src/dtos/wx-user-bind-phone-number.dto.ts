import { ApiProperty } from "@nestjs/swagger";

export class WxUserBindPhoneNumberDto {
  @ApiProperty({
    description: "手机号",
    example: "13950442340"
  })
  phoneNumber: string;

  @ApiProperty({
    description: "验证码",
    example: "123456"
  })
  captcha: string;
}
