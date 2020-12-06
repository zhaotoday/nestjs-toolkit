import { Column, DataType, Model, Table } from "sequelize-typescript";
import { Is } from "../enums/is.enum";

@Table({
  tableName: "brands",
  comment: "商标"
})
export class Brand extends Model {
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
    comment: "名称"
  })
  name: string;

  @Column({
    type: DataType.INTEGER.UNSIGNED,
    comment: "Logo ID"
  })
  logoId: number;

  @Column({
    type: DataType.STRING(500),
    comment: "链接"
  })
  link: string;

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
