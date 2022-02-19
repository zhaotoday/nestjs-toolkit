import { ApiProperty } from "@nestjs/swagger";

export class UserAccountLoginDto {
  @ApiProperty({
    description: "账号（手机号或邮箱）",
    example: "13950442340",
  })
  account: string;

  @ApiProperty({
    description: "密码",
    example: "123456",
  })
  password: string;
}
