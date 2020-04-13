import { ApiProperty } from "@nestjs/swagger";

export class CommissionDto {
  @ApiProperty({
    description: "微信用户 ID",
    example: 1
  })
  wxUserId: number;

  @ApiProperty({
    description: "下级微信用户 ID（分销关系）",
    example: 1
  })
  lowerWxUserId: number;

  @ApiProperty({
    description: "订单 ID",
    example: 1
  })
  orderId: number;

  @ApiProperty({
    description: "佣金",
    example: 100
  })
  amount: number;
}
