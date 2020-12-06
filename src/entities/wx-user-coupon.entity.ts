import { Column, DataType, Model, Table } from "sequelize-typescript";
import { Is } from "../enums/is.enum";

@Table({
  tableName: "wxUserCoupons",
  comment: "微信用户优惠券"
})
export class WxUserCoupon extends Model {
  @Column({
    type: DataType.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    comment: "ID"
  })
  id: number;

  @Column({
    type: DataType.TINYINT({ length: 1 }),
    comment: "是否已使用",
    defaultValue: Is.False
  })
  used: number;
}
