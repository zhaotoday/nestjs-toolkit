import { ApiProperty } from "@nestjs/swagger";
import { Is } from "../enums/is.enum";

export class UserDto {
  @ApiProperty({
    description: "姓名",
    example: "赵金添"
  })
  name: string;

  @ApiProperty({
    description: "手机号",
    example: "13950442340"
  })
  phoneNumber: string;

  @ApiProperty({
    description: "角色 ID",
    example: 2
  })
  roleId: number;

  @ApiProperty({
    description: "微信用户 ID",
    example: 1
  })
  wxUserId: number;

  @ApiProperty({
    description: "状态",
    example: Is.True
  })
  status: number;
}
