import { Table, Column, Model, DataType } from "sequelize-typescript";
import { Is } from "nestjs-toolkit";

@Table({
  tableName: "ads"
})
export class Ad extends Model<Ad> {
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
    comment: "标题"
  })
  title: string;

  @Column({
    type: DataType.INTEGER.UNSIGNED,
    comment: "图片 ID"
  })
  picture: number;

  @Column({
    type: DataType.STRING(200),
    comment: "链接"
  })
  link: string;

  @Column({
    type: DataType.TINYINT({ length: 1 }),
    comment: "状态",
    defaultValue: Is.True
  })
  status: number;
}
