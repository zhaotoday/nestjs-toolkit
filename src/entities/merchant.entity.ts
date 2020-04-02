import { Table, Column, Model, DataType } from "sequelize-typescript";
import { CheckStatus } from "../enums/check-status.enum";

@Table({
  tableName: "merchants"
})
export class Merchant extends Model<Merchant> {
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
    type: DataType.JSON,
    comment: "图片 ID 集合"
  })
  pictureIds: number[];

  @Column({
    type: DataType.STRING(50),
    comment: "联系人"
  })
  contactName: string;

  @Column({
    type: DataType.STRING(11),
    comment: "手机号"
  })
  phoneNumber: string;

  @Column({
    type: DataType.TINYINT({ length: 1 }),
    comment: "状态",
    defaultValue: CheckStatus.Checking
  })
  status: number;
}
