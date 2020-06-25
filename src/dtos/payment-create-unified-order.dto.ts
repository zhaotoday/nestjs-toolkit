import { ApiProperty } from "@nestjs/swagger";
import { OrderPayment } from "../enums/order-payment.enum";
import { WxUserLoginType } from "../enums/wx-user-login-type.enum";

export class PaymentCreateUnifiedOrderDto {
  @ApiProperty({
    description: "订单 ID",
    example: 1
  })
  id: number;

  @ApiProperty({
    description: "微信用户登录类型",
    example: WxUserLoginType.Mp
  })
  wxUserLoginType: string;

  @ApiProperty({
    description: "购买商品"
  })
  products: object;

  @ApiProperty({
    description: "收获地址 ID",
    example: 1
  })
  addressId: number;

  @ApiProperty({
    description: "优惠券 ID",
    example: 1
  })
  wxUserCouponId: number;

  @ApiProperty({
    description: "支付金额",
    example: 100.01
  })
  amount: number;

  @ApiProperty({
    description: "支付类型",
    example: OrderPayment.WeChatPay
  })
  payment: string;

  @ApiProperty({
    description: "备注"
  })
  remark: string;
}
