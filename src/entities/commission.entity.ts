import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table({
  tableName: "commissions",
  comment: "佣金"
})
export class Commission extends Model {

  @Column({
    type: DataType.FLOAT(10),
    comment: "佣金金额",
    defaultValue: 0
  })
  value: number;
}
