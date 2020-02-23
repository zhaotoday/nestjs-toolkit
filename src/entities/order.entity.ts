import {
  Column,
  Model,
  Table,
  DataType,
  ForeignKey,
  BelongsTo
} from "sequelize-typescript";
import { OrderPayment } from "../enums/order-payment.enum";
import { OrderStatus } from "../enums/order-status.enum";
import { WxUser } from "./wx-user.entity";
import { Address } from "./address.entity";

@Table({
  tableName: "orders"
})
export class Order extends Model<Order> {
  @Column({
    type: DataType.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    comment: "ID"
  })
  id: number;

  @ForeignKey(() => WxUser)
  @Column({
    type: DataType.INTEGER.UNSIGNED,
    comment: "微信用户 ID"
  })
  wxUserId: number;

  @BelongsTo(() => WxUser)
  wxUser: WxUser;

  @Column({
    type: DataType.STRING(16),
    comment: "订单号"
  })
  no: string;

  @Column({
    type: DataType.JSON,
    comment: "购买产品"
  })
  products: object;

  @ForeignKey(() => Address)
  @Column({
    type: DataType.INTEGER.UNSIGNED,
    comment: "收获地址 ID"
  })
  addressId: number;

  @BelongsTo(() => Address)
  address: Address;

  @Column({
    type: DataType.INTEGER.UNSIGNED,
    comment: "优惠券 ID"
  })
  wxUserCouponId: number;

  @Column({
    type: DataType.FLOAT({ length: 10 }),
    comment: "支付金额",
    defaultValue: 0
  })
  amount: number;

  @Column({
    type: DataType.BIGINT({ length: 13 }),
    comment: "支付时间"
  })
  paidAt: number;

  @Column({
    type: DataType.ENUM.apply(null, Object.values(OrderPayment)),
    comment: "支付类型"
  })
  payment: string;

  @Column({
    type: DataType.TEXT({ length: "tiny" }),
    comment: "备注"
  })
  remark: string;

  @Column({
    type: DataType.ENUM.apply(null, Object.values(OrderStatus)),
    comment: "状态",
    defaultValue: OrderStatus.ToPay
  })
  status: string;
}
