import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table({
  tableName: "boughtProducts",
  comment: "已购商品"
})
export class BoughtProduct extends Model {
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
