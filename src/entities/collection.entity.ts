import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table({
  tableName: "collections",
  comment: "收藏"
})
export class Collection extends Model<Collection> {
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
    comment: "已收藏的商品 ID 集合"
  })
  productIds: number[];
}
