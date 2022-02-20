import { ApiProperty } from "@nestjs/swagger";

export class UserAccountRegisterDto {
  @ApiProperty({
    description: "姓名",
    example: "赵金添",
  })
  name: string;

  @ApiProperty({
    description: "昵称",
    example: "心晴",
  })
  nickName: string;

  @ApiProperty({
    description: "手机号",
    example: "13950442340",
  })
  phoneNumber: string;

  @ApiProperty({
    description: "密码",
    example: "123456",
  })
  password: string;

  @ApiProperty({
    description: "验证码",
    example: "123456",
  })
  captcha: string;
}
