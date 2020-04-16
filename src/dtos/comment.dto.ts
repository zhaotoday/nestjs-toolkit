import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

export class CommentDto {
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
    description: "产品 ID",
    example: 1
  })
  productId: number;

  @ApiProperty({
    description: "评分",
    example: 1
  })
  rate: number;

  @ApiProperty({
    description: "内容",
    example: "这件衣服不错。"
  })
  content: string;

  @ApiProperty({
    description: "状态",
    example: 0
  })
  status: number;
}
