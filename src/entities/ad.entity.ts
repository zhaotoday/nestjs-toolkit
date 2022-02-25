import { Column, DataType, Model, Table } from "sequelize-typescript";
import { Is } from "../enums/is.enum";

@Table({
  tableName: "ads",
  comment: "广告",
})
export class Ad extends Model {
  @Column({
    type: DataType.STRING(200),
    comment: "标题",
  })
  title: string;

  @Column({
    type: DataType.INTEGER.UNSIGNED,
    comment: "图片 ID",
  })
  image: number;

  @Column({
    type: DataType.STRING(200),
    comment: "链接",
  })
  link: string;

  @Column({
    type: DataType.TINYINT({ length: 1 }),
    comment: "状态",
    defaultValue: Is.True,
  })
  status: number;

  @Column({
    type: DataType.INTEGER.UNSIGNED,
    comment: "排序",
  })
  order: number;
}
