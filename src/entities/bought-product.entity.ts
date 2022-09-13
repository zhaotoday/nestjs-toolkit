import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table({
  tableName: "boughtProducts",
  comment: "已购买商品",
})
export class BoughtProduct extends Model {
  @Column({
    type: DataType.JSON,
    comment: "已购买商品 ID 集合",
  })
  productIds: number[];
}
