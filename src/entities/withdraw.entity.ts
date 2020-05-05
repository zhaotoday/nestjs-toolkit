import { Column, DataType, Model, Table } from "sequelize-typescript";
import { WithdrawStatus } from "../enums/withdraw-status.enum";

@Table({
  tableName: "withdraws"
})
export class Withdraw extends Model<Withdraw> {
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
    type: DataType.ENUM.apply(null, Object.values(WithdrawStatus)),
    comment: "状态",
    defaultValue: WithdrawStatus.ToPay
  })
  status: string;
}
