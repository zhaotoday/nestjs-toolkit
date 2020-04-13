import { ApiProperty } from "@nestjs/swagger";
import { OrderStatus } from "../enums/order-status.enum";

export class WithdrawDto {
  @ApiProperty({
    description: "微信用户 ID",
    example: 1
  })
  wxUserId: number;

  @ApiProperty({
    description: "订单号",
    example: "2001011106289214"
  })
  no: string;

  @ApiProperty({
    description: "金额",
    example: 100
  })
  amount: number;

  @ApiProperty({
    description: "状态",
    example: OrderStatus.ToPay
  })
  status: string;
}
