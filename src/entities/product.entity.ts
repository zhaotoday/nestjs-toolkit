import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey,
  BelongsTo
} from "sequelize-typescript";
import { Is } from "../enums/is.enum";
import { Category } from "./category.entity";

@Table({
  tableName: "products"
})
export class Product extends Model<Product> {
  @Column({
    type: DataType.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    comment: "ID"
  })
  id: number;

  @ForeignKey(() => Category)
  @Column({
    type: DataType.INTEGER({ length: 6 }).UNSIGNED,
    comment: "分类 ID"
  })
  categoryId: number;

  @BelongsTo(() => Category)
  category: Category;

  @Column({
    type: DataType.STRING(200),
    comment: "名称"
  })
  name: string;

  @Column({
    type: DataType.FLOAT(10),
    comment: "价格",
    defaultValue: 0
  })
  price: number;

  @Column({
    type: DataType.FLOAT(10),
    comment: "原价",
    defaultValue: 0
  })
  originalPrice: number;

  @Column({
    type: DataType.INTEGER({ length: 8 }),
    comment: "库存",
    defaultValue: 0
  })
  stock: number;

  @Column({
    type: DataType.INTEGER.UNSIGNED,
    comment: "图片 ID"
  })
  picture: number;

  @Column({
    type: DataType.TEXT({ length: "tiny" }),
    comment: "描述"
  })
  description: string;

  @Column({
    type: DataType.TEXT({ length: "long" }),
    comment: "详情"
  })
  content: string;

  @Column({
    type: DataType.TINYINT({ length: 1 }),
    comment: "是否新品",
    defaultValue: Is.False
  })
  new: number;

  @Column({
    type: DataType.TINYINT({ length: 1 }),
    comment: "是否推荐",
    defaultValue: Is.False
  })
  recommended: number;

  @Column({
    type: DataType.TINYINT({ length: 1 }),
    comment: "是否上架",
    defaultValue: Is.True
  })
  status: number;
}