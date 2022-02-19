import { ApiProperty } from "@nestjs/swagger";

export class UserSendSmsCaptchaDto {
  @ApiProperty({
    description: "手机号",
    example: "13950442340",
  })
  phoneNumber: string;
}
