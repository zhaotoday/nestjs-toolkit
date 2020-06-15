import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table({
  tableName: "incomes"
})
export class Income extends Model<Income> {
  @Column({
    type: DataType.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    comment: "ID"
  })
  id: number;

  @Column({
    type: DataType.FLOAT(10),
    comment: "收入金额",
    defaultValue: 0
  })
  value: number;
}
