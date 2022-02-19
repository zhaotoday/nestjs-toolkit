import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table({
  tableName: "collections",
  comment: "收藏"
})
export class Collection extends Model {

  @Column({
    type: DataType.JSON,
    comment: "已收藏的商品 ID 集合"
  })
  productIds: number[];
}
