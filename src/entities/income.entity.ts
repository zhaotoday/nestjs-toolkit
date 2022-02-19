import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table({
  tableName: "incomes",
  comment: "收入",
})
export class Income extends Model {
  @Column({
    type: DataType.FLOAT(10),
    comment: "收入金额",
    defaultValue: 0,
  })
  value: number;
}
