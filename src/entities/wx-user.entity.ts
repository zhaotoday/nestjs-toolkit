import { Column, DataType, Model, Table } from "sequelize-typescript";
import { Is } from "../enums/is.enum";
import { Gender } from "../enums/gender.enum";
import { WxUserType } from "../enums/wx-user-type.enum";

@Table({
  tableName: "wxUsers"
})
export class WxUser extends Model<WxUser> {
  @Column({
    type: DataType.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    comment: "ID"
  })
  id: number;

  @Column({
    type: DataType.STRING(50),
    comment: "OPEN ID"
  })
  openId: string;

  @Column({
    type: DataType.STRING(50),
    comment: "公众号 OPEN ID"
  })
  oaOpenId: string;

  @Column({
    type: DataType.STRING(50),
    comment: "网站应用 OPEN ID"
  })
  webOpenId: string;

  @Column({
    type: DataType.STRING(50),
    comment: "移动应用 OPEN ID"
  })
  mobileOpenId: string;

  @Column({
    type: DataType.STRING(50),
    comment: "UNION ID"
  })
  unionId: string;

  @Column({
    type: DataType.STRING(200),
    comment: "头像"
  })
  avatarUrl: string;

  @Column({
    type: DataType.INTEGER.UNSIGNED,
    comment: "自定义头像 ID"
  })
  avatarId: number;

  @Column({
    type: DataType.STRING(100),
    comment: "姓名",
    defaultValue: ""
  })
  name: string;

  @Column({
    type: DataType.STRING(200),
    comment: "昵称"
  })
  nickName: string;

  @Column({
    type: DataType.TINYINT({ length: 1 }),
    comment: "性别",
    defaultValue: Gender.Unknown
  })
  gender: number;

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
    type: DataType.STRING(50),
    comment: "语言"
  })
  language: string;

  @Column({
    type: DataType.STRING(50),
    comment: "国家"
  })
  country: string;

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
    type: DataType.JSON,
    comment: "所有数据"
  })
  data: object;

  @Column({
    type: DataType.ENUM.apply(null, Object.values(WxUserType)),
    comment: "用户类型",
    defaultValue: WxUserType.User
  })
  type: string;

  @Column({
    type: DataType.TINYINT({ length: 1 }),
    comment: "状态",
    defaultValue: Is.True
  })
  status: number;
}
