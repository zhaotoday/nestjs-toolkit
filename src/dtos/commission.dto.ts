import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

export class CommissionDto {
  @ApiProperty({
    description: "ID",
    example: 1,
  })
  @ApiPropertyOptional()
  id?: number;

  @ApiProperty({
    description: "用户 ID",
    example: 1,
  })
  userId: number;

  @ApiProperty({
    description: "下级用户 ID（分销关系）",
    example: 1,
  })
  lowerWxUserId: number;

  @ApiProperty({
    description: "订单 ID",
    example: 1,
  })
  orderId: number;

  @ApiProperty({
    description: "佣金金额",
    example: 100,
  })
  value: number;
}
