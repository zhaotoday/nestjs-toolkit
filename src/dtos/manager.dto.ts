import { ApiProperty } from "@nestjs/swagger";
import { Is } from "../enums/is.enum";

export class ManagerDto {
  @ApiProperty({
    description: "用户名",
    example: "admin"
  })
  username: string;

  @ApiProperty({
    description: "密码",
    example: "123456"
  })
  password: string;

  @ApiProperty({
    type: "json",
    description: "角色",
    example: ["ADMIN"]
  })
  roles: string;

  @ApiProperty({
    description: "状态",
    example: Is.True
  })
  status: number;
}
