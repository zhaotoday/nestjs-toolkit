import { Column, DataType, Model, Table } from "sequelize-typescript";
import { OrderPayment } from "../enums/order-payment.enum";
import { OrderStatus } from "../enums/order-status.enum";

@Table({
  tableName: "orders",
  comment: "订单",
})
export class Order extends Model {
  @Column({
    type: DataType.STRING(16),
    comment: "订单号",
  })
  no: string;

  @Column({
    type: DataType.FLOAT({ length: 10 }),
    comment: "支付金额",
    defaultValue: 0,
  })
  amount: number;

  @Column({
    type: DataType.FLOAT({ length: 10 }),
    comment: "支付积分",
    defaultValue: 0,
  })
  points: number;

  @Column({
    type: DataType.BIGINT({ length: 13 }),
    comment: "支付时间",
  })
  paidAt: number;

  @Column({
    type: DataType.BIGINT({ length: 13 }),
    comment: "配送时间",
  })
  startedToDistributeAt: number;

  @Column({
    type: DataType.BIGINT({ length: 13 }),
    comment: "完成时间",
  })
  finishedAt: number;

  @Column({
    type: DataType.ENUM.apply(null, Object.values(OrderPayment)),
    comment: "支付类型",
  })
  payment: string;

  @Column({
    type: DataType.TEXT({ length: "tiny" }),
    comment: "备注",
  })
  remark: string;

  @Column({
    type: DataType.ENUM.apply(null, Object.values(OrderStatus)),
    comment: "状态",
    defaultValue: OrderStatus.ToPay,
  })
  status: string;

  @Column({
    type: DataType.INTEGER.UNSIGNED,
    comment: "配送员用户 ID",
  })
  delivererUserId: number;
}
