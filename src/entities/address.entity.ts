import { Column, DataType, Model, Table } from "sequelize-typescript";
import { Is } from "../enums/is.enum";
import { AddressTag } from "../enums/address-tag.enum";
import { Gender } from "../enums/gender.enum";

@Table({
  tableName: "addresses",
  comment: "地址",
})
export class Address extends Model {
  @Column({
    type: DataType.STRING(100),
    comment: "收货人",
  })
  name: string;

  @Column({
    type: DataType.TINYINT({ length: 1 }),
    comment: "性别",
    defaultValue: Gender.Unknown,
  })
  gender: string;

  @Column({
    type: DataType.STRING(11),
    comment: "手机号",
  })
  phoneNumber: string;

  @Column({
    type: DataType.JSON,
    comment: "位置",
  })
  location: object;

  @Column({
    type: DataType.STRING(100),
    comment: "门牌号",
  })
  room: string;

  @Column({
    type: DataType.ENUM.apply(null, Object.values(AddressTag)),
    comment: "标签",
  })
  tag: AddressTag;

  @Column({
    type: DataType.TINYINT({ length: 1 }),
    comment: "是否默认",
    defaultValue: Is.False,
  })
  default: number;
}
