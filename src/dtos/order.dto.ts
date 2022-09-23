import { ApiProperty } from "@nestjs/swagger";
import { OrderStatus } from "../enums/order-status.enum";
import { OrderPayment } from "../enums/order-payment.enum";

export class OrderDto {
  @ApiProperty({
    description: "用户 ID",
    example: 1,
  })
  userId: number;

  @ApiProperty({
    description: "订单号",
    example: "2001011106289214",
  })
  no: string;

  @ApiProperty({
    description: "支付金额",
    example: 100.01,
  })
  amount: number;

  @ApiProperty({
    description: "支付积分",
    example: 100,
  })
  points: number;

  @ApiProperty({
    description: "支付时间",
    example: 1581689999001,
  })
  paidAt: number;

  @ApiProperty({
    description: "配送时间",
    example: 1581689999001,
  })
  startedToDistributeAt: number;

  @ApiProperty({
    description: "完成时间",
    example: 1581689999001,
  })
  finishedAt: number;

  @ApiProperty({
    description: "支付类型",
    example: OrderPayment.WeChatPay,
  })
  payment: OrderPayment;

  @ApiProperty({
    description: "备注",
  })
  remark: string;

  @ApiProperty({
    description: "状态",
    example: OrderStatus.ToPay,
  })
  status: OrderStatus;

  @ApiProperty({
    description: "配送员用户 ID",
    example: 1,
  })
  delivererUserId: number;
}
