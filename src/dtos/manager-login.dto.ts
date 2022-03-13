import { ApiProperty } from "@nestjs/swagger";

export class ManagerLoginDto {
  @ApiProperty({
    description: "用户名",
    example: "admin",
  })
  username: string;

  @ApiProperty({
    description: "密码",
    example: "aaa111",
  })
  password: string;
}
