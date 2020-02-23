import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey,
  BelongsTo
} from "sequelize-typescript";
import { WxUser } from "./wx-user.entity";
import { Product } from "./product.entity";

@Table({
  tableName: "collections"
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

  @ForeignKey(() => WxUser)
  @Column({
    type: DataType.INTEGER.UNSIGNED,
    comment: "微信用户 ID"
  })
  wxUserId: number;

  @BelongsTo(() => WxUser)
  wxUser: WxUser;

  @ForeignKey(() => Product)
  @Column({
    type: DataType.INTEGER.UNSIGNED,
    comment: "收藏的商品 ID"
  })
  productId: number;

  @BelongsTo(() => Product)
  product: Product;
}
