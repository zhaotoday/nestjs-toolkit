import { Column, DataType, Model, Table } from "sequelize-typescript";
import { Is } from "../enums/is.enum";

@Table({
  tableName: "products",
  comment: "商品"
})
export class Product extends Model {
  @Column({
    type: DataType.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    comment: "ID"
  })
  id: number;

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
    type: DataType.FLOAT(10),
    comment: "积分",
    defaultValue: 0
  })
  points: number;

  @Column({
    type: DataType.FLOAT(10),
    comment: "赠送积分",
    defaultValue: 0
  })
  givingPoints: number;

  @Column({
    type: DataType.INTEGER.UNSIGNED,
    comment: "佣金比例"
  })
  commissionRate: number;

  @Column({
    type: DataType.INTEGER({ length: 8 }),
    comment: "库存",
    defaultValue: 0
  })
  stock: number;

  @Column({
    type: DataType.JSON,
    comment: "图片 ID 集合"
  })
  pictureIds: number[];

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

  @Column({
    type: DataType.INTEGER.UNSIGNED,
    comment: "排序"
  })
  order: number;

  @Column({
    type: DataType.FLOAT(10),
    comment: "销量",
    defaultValue: 0
  })
  sales: number;
}
