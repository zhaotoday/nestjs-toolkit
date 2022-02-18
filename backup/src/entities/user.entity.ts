import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table
} from "sequelize-typescript";
import { WxUser } from "./wx-user.entity";
import { Is } from "../enums/is.enum";

@Table({
  tableName: "users",
  comment: "用户"
})
export class User extends Model {
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
    type: DataType.STRING(50),
    comment: "角色"
  })
  role: string;

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

  @Column({
    type: DataType.INTEGER.UNSIGNED,
    comment: "排序"
  })
  order: number;
}
