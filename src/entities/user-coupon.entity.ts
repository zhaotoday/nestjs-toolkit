import { Column, DataType, Model, Table } from "sequelize-typescript";
import { Is } from "../enums/is.enum";

@Table({
  tableName: "userCoupons",
  comment: "用户优惠券"
})
export class UserCoupon extends Model {

  @Column({
    type: DataType.TINYINT({ length: 1 }),
    comment: "是否已使用",
    defaultValue: Is.False
  })
  used: number;
}
