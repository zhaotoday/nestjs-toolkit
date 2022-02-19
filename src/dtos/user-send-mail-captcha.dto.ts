import { ApiProperty } from "@nestjs/swagger";

export class UserSendMailCaptchaDto {
  @ApiProperty({
    description: "邮箱",
    example: "729234283@qq.com",
  })
  mail: string;
}
