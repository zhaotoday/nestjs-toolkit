import {
  Table,
  Column,
  Model,
  DataType,
  BelongsTo,
  ForeignKey
} from "sequelize-typescript";
import { WxUser } from "./wx-user.entity";
import { Is } from "../enums/is.enum";

@Table({
  tableName: "users"
})
export class User extends Model<User> {
  @Column({
    type: DataType.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    comment: "ID"
  })
  id: number;

  @Column({
    type: DataType.STRING(100),
    comment: "姓名"
  })
  name: string;

  @Column({
    type: DataType.STRING(11),
    comment: "手机号"
  })
  phoneNumber: string;

  @Column({
    type: DataType.INTEGER.UNSIGNED,
    comment: "角色 ID"
  })
  roleId: number;

  @ForeignKey(() => WxUser)
  @Column({
    type: DataType.INTEGER.UNSIGNED,
    comment: "微信用户 ID"
  })
  wxUserId: number;

  @BelongsTo(() => WxUser)
  wxUser: WxUser;

  @Column({
    type: DataType.TINYINT({ length: 1 }),
    comment: "状态",
    defaultValue: Is.True
  })
  status: number;
}
