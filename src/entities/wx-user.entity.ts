import { Table, Column, Model, DataType } from "sequelize-typescript";

@Table({
  tableName: "wxUsers"
})
export class WxUser extends Model<WxUser> {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    comment: "ID"
  })
  id: number;

  @Column({
    type: DataType.STRING(50),
    comment: "openId"
  })
  openId: string;

  @Column({
    type: DataType.STRING(50),
    comment: "unionId"
  })
  unionId: string;

  @Column({
    type: DataType.STRING(100),
    comment: "企业微信-userId"
  })
  userId: string;

  @Column({
    type: DataType.STRING(200),
    comment: "头像"
  })
  avatarUrl: string;

  @Column({
    type: DataType.STRING(100),
    comment: "姓名"
  })
  name: string;

  @Column({
    type: DataType.STRING(200),
    comment: "昵称"
  })
  nickName: string;

  @Column({
    type: DataType.STRING(1),
    comment: "性别"
  })
  gender: string;

  @Column({
    type: DataType.STRING(50),
    comment: "语言"
  })
  language: string;

  @Column({
    type: DataType.STRING(50),
    comment: "省份"
  })
  province: string;

  @Column({
    type: DataType.STRING(50),
    comment: "城市"
  })
  city: string;

  @Column({
    type: DataType.STRING(50),
    comment: "国家"
  })
  country: string;

  @Column({
    type: DataType.STRING(11),
    comment: "手机号"
  })
  phoneNumber: string;

  @Column({
    type: DataType.STRING(10),
    comment: "生日"
  })
  birthday: string;

  @Column({
    type: DataType.TINYINT,
    defaultValue: 1,
    comment: "状态"
  })
  status: number;

  @Column({
    type: DataType.JSON,
    comment: "所有数据"
  })
  data: object;
}
