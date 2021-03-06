import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

export class IncomeDto {
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
    description: "订单 ID",
    example: 1
  })
  orderId: number;

  @ApiProperty({
    description: "收入金额",
    example: 100
  })
  value: number;
}
