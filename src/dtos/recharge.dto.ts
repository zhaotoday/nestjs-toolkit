import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { OrderStatus } from "../enums/order-status.enum";

export class RechargeDto {
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
    description: "订单号",
    example: "2001011106289214"
  })
  no: string;

  @ApiProperty({
    description: "充值金额",
    example: 100
  })
  value: number;

  @ApiProperty({
    description: "状态",
    example: OrderStatus.ToPay
  })
  status: string;
}
