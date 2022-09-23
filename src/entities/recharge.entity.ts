import { Column, DataType, Model, Table } from "sequelize-typescript";
import { OrderStatus } from "../enums/order-status.enum";

@Table({
  tableName: "recharges",
  comment: "充值",
})
export class Recharge extends Model {
  @Column({
    type: DataType.STRING(16),
    comment: "订单号",
  })
  no: string;

  @Column({
    type: DataType.FLOAT(10),
    comment: "充值金额",
    defaultValue: 0,
  })
  value: number;

  @Column({
    type: DataType.ENUM.apply(null, Object.values(OrderStatus)),
    comment: "状态",
    defaultValue: OrderStatus.ToPay,
  })
  status: OrderStatus;
}
