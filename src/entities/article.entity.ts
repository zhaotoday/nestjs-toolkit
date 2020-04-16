import { Column, DataType, Model, Table } from "sequelize-typescript";
import { Is } from "../enums/is.enum";

@Table({
  tableName: "articles"
})
export class Article extends Model<Article> {
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
    type: DataType.STRING(200),
    comment: "副标题"
  })
  subtitle: string;

  @Column({
    type: DataType.TEXT({ length: "tiny" }),
    comment: "描述"
  })
  description: string;

  @Column({
    type: DataType.TEXT({ length: "long" }),
    comment: "内容"
  })
  content: string;

  @Column({
    type: DataType.INTEGER.UNSIGNED,
    comment: "封面图片 ID"
  })
  pictureId: number;

  @Column({
    type: DataType.STRING(200),
    comment: "链接"
  })
  link: string;

  @Column({
    type: DataType.TINYINT({ length: 1 }),
    comment: "是否热门",
    defaultValue: Is.False
  })
  hot: number;

  @Column({
    type: DataType.TINYINT({ length: 1 }),
    comment: "是否置顶",
    defaultValue: Is.False
  })
  top: number;

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
