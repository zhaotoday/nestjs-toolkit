import { Column, DataType, Model, Table as $Table } from "sequelize-typescript";
import { Gender } from "../enums/gender.enum";

@$Table({
  tableName: "users",
  comment: "用户",
})
export class User extends Model {
  @Column({
    type: DataType.STRING(100),
    comment: "昵称",
  })
  nickName: string;

  @Column({
    type: DataType.STRING(100),
    comment: "姓名",
  })
  name: string;

  @Column({
    type: DataType.CHAR(11),
    unique: true,
    comment: "手机号码",
    validate: {
      is: /^1\d{2}\s?\d{4}\s?\d{4}$/,
    },
  })
  phoneNumber: string;

  @Column({
    type: DataType.TINYINT({ length: 1 }),
    comment: "性别",
    defaultValue: Gender.Unknown,
  })
  gender: number;

  @Column({
    type: DataType.STRING(100),
    unique: true,
    comment: "邮箱",
    validate: {
      isEmail: true,
    },
  })
  mail: string;

  @Column({
    type: DataType.CHAR(64),
    comment: "账户密码",
  })
  hashedPassword: string;

  @Column({
    type: DataType.VIRTUAL,
    get() {
      return !!this.get("hashedPassword");
    },
  })
  hasPassword: boolean;

  @Column({
    type: DataType.INTEGER.UNSIGNED,
    comment: "自定义头像文件 ID",
  })
  avatarFileId: number;

  @Column({
    type: DataType.STRING(100),
    comment: "微信昵称",
  })
  wxNickName: string;

  @Column({
    type: DataType.STRING(200),
    comment: "微信头像",
  })
  wxAvatarUrl: string;

  @Column({
    type: DataType.CHAR(28),
    comment: "微信 UnionId",
  })
  wxUnionId: string;

  @Column({
    type: DataType.CHAR(28),
    comment: "微信小程序 OpenId",
  })
  wxMpOpenId: string;

  @Column({
    type: DataType.CHAR(28),
    comment: "微信移动应用 OpenId",
  })
  wxAppOpenId: string;

  @Column({
    type: DataType.CHAR(28),
    comment: "微信网站应用 OpenId",
  })
  wxWebOpenId: string;
}
