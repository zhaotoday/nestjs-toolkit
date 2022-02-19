import { Column, DataType, Model, Table } from "sequelize-typescript";
import { WithdrawStatus } from "../enums/withdraw-status.enum";

@Table({
  tableName: "withdraws",
  comment: "提现"
})
export class Withdraw extends Model {

  @Column({
    type: DataType.STRING(16),
    comment: "订单号"
  })
  no: string;

  @Column({
    type: DataType.FLOAT(10),
    comment: "提现金额",
    defaultValue: 0
  })
  value: number;

  @Column({
    type: DataType.ENUM.apply(null, Object.values(WithdrawStatus)),
    comment: "状态",
    defaultValue: WithdrawStatus.ToPay
  })
  status: string;
}
