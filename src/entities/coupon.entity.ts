import { Table, Column, Model, DataType } from "sequelize-typescript";
import { Is } from "../enums/is.enum";
import { CouponObjectType } from "../enums/coupon-object-type.enum";

@Table({
  tableName: "coupons"
})
export class Coupon extends Model<Coupon> {
  @Column({
    type: DataType.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    comment: "ID"
  })
  id: number;

  @Column({
    type: DataType.STRING(16),
    comment: "优惠券号"
  })
  no: string;

  @Column({
    type: DataType.STRING(200),
    comment: "名称"
  })
  name: string;

  @Column({
    type: DataType.TEXT({ length: "tiny" }),
    comment: "描述"
  })
  description: string;

  @Column({
    type: DataType.STRING(50),
    comment: "类型"
  })
  type: string;

  @Column({
    type: DataType.FLOAT({ length: 10 }),
    comment: "抵扣金额",
    defaultValue: 0
  })
  deductAmount: number;

  @Column({
    type: DataType.FLOAT({ length: 10 }),
    comment: "最低消费金额",
    defaultValue: 0
  })
  minConsumeAmount: number;

  @Column({
    type: DataType.STRING(50),
    comment: "使用对象类型",
    defaultValue: CouponObjectType.All
  })
  objectType: string;

  @Column({
    type: DataType.JSON,
    comment: "指定商品分类 ID 集合"
  })
  categoryIds: number[];

  @Column({
    type: DataType.JSON,
    comment: "指定商品 ID 集合"
  })
  productIds: number[];

  @Column({
    type: DataType.TINYINT({ length: 3 }),
    comment: "有效期，单：位天"
  })
  period: number;

  @Column({
    type: DataType.TINYINT({ length: 1 }),
    comment: "状态",
    defaultValue: Is.True
  })
  status: number;
}
