import { Column, DataType, Model, Table } from "sequelize-typescript";
import { Is } from "../enums/is.enum";

@Table({
  tableName: "files",
  comment: "文件",
})
export class File extends Model {
  @Column({
    type: DataType.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    comment: "ID",
  })
  id: number;

  @Column({
    type: DataType.STRING(36),
    comment: "UUID",
  })
  uuid: string;

  @Column({
    type: DataType.STRING(200),
    comment: "名称",
  })
  name: string;

  @Column({
    type: DataType.STRING(50),
    comment: "类型",
  })
  type: string;

  @Column({
    type: DataType.STRING(50),
    comment: "大小",
  })
  size: string;

  @Column({
    type: DataType.STRING(50),
    comment: "目录",
  })
  dir: string;

  @Column({
    type: DataType.STRING(10),
    comment: "日期",
  })
  date: string;

  @Column({
    type: DataType.STRING(10),
    comment: "后缀",
  })
  ext: string;

  @Column({
    type: DataType.TINYINT({ length: 1 }),
    comment: "是否上传到本地",
    defaultValue: Is.False,
  })
  local: Is;
}
