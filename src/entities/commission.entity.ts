import { Table, Column, Model, DataType } from "sequelize-typescript";

@Table({
  tableName: "commissions"
})
export class Commission extends Model<Commission> {
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
    comment: "佣金",
    defaultValue: 0
  })
  amount: number;
}
