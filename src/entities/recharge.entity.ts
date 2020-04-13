import { Table, Column, Model, DataType } from "sequelize-typescript";
import { OrderStatus } from "../enums/order-status.enum";

@Table({
  tableName: "recharge"
})
export class Recharge extends Model<Recharge> {
  @Column({
    type: DataType.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    comment: "ID"
  })
  id: number;

  @Column({
    type: DataType.STRING(16),
    comment: "订单号"
  })
  no: string;

  @Column({
    type: DataType.FLOAT(10),
    comment: "金额",
    defaultValue: 0
  })
  amount: number;

  @Column({
    type: DataType.ENUM.apply(null, Object.values(OrderStatus)),
    comment: "状态",
    defaultValue: OrderStatus.ToPay
  })
  status: string;
}
