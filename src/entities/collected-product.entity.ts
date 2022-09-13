import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table({
  tableName: "collectedProducts",
  comment: "已收藏的商品",
})
export class CollectedProduct extends Model {
  @Column({
    type: DataType.JSON,
    comment: "已收藏的商品 ID 集合",
  })
  productIds: number[];
}
