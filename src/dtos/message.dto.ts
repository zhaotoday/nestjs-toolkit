import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { CheckStatus } from "../enums/check-status.enum";

export class MessageDto {
  @ApiProperty({
    description: "ID",
    example: 1
  })
  @ApiPropertyOptional()
  id?: number;

  @ApiProperty({
    description: "用户 ID",
    example: 1
  })
  userId: number;

  @ApiProperty({
    description: "联系人",
    example: "赵金添"
  })
  contactName: string;

  @ApiProperty({
    description: "联系方式",
    example: "13950442340"
  })
  contact: string;

  @ApiProperty({
    description: "内容",
    example: "这树又高又大。"
  })
  content: string;

  @ApiProperty({
    description: "状态",
    example: CheckStatus.Checking
  })
  status: number;
}
