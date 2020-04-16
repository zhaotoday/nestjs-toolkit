import { Table, Column, Model, DataType } from "sequelize-typescript";

@Table({
  tableName: "boughtProducts"
})
export class BoughtProduct extends Model<BoughtProduct> {
  @Column({
    type: DataType.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    comment: "ID"
  })
  id: number;

  @Column({
    type: DataType.JSON,
    comment: "已购买的商品 ID 集合"
  })
  productIds: number[];
}
