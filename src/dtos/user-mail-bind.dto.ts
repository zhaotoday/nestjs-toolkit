import { ApiProperty } from "@nestjs/swagger";

export class UserMailBindDto {
  @ApiProperty({
    description: "邮箱",
    example: "729234283@qq.com",
  })
  mail: string;

  @ApiProperty({
    description: "验证码",
    example: "123456",
  })
  captcha: string;
}
