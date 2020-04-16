import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'
import { Is } from "../enums/is.enum";

export class UserDto {
  @ApiProperty({
    description: "ID",
    example: 1
  })
  @ApiPropertyOptional()
  id?: number;

  @ApiProperty({
    description: "微信用户 ID",
    example: 1
  })
  wxUserId: number;

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
    description: "角色",
    example: "Deliverer"
  })
  role: string;

  @ApiProperty({
    description: "状态",
    example: Is.True
  })
  status: number;

  @ApiProperty({
    description: "排序",
    example: 1
  })
  order: number;
}
