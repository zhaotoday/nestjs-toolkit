import { Column, DataType, Model, Table } from "sequelize-typescript";
import { Is } from "../enums/is.enum";

@Table({
  tableName: "articles",
  comment: "文章",
})
export class Article extends Model {
  @Column({
    type: DataType.STRING(200),
    comment: "标题",
  })
  title: string;

  @Column({
    type: DataType.STRING(200),
    comment: "副标题",
  })
  subtitle: string;

  @Column({
    type: DataType.TEXT({ length: "tiny" }),
    comment: "描述",
  })
  description: string;

  @Column({
    type: DataType.TEXT({ length: "long" }),
    comment: "内容",
  })
  content: string;

  @Column({
    type: DataType.INTEGER.UNSIGNED,
    comment: "封面图片文件 ID",
  })
  imageFileId: number;

  @Column({
    type: DataType.STRING(200),
    comment: "链接",
  })
  link: string;

  @Column({
    type: DataType.TINYINT({ length: 1 }),
    comment: "是否热门",
    defaultValue: Is.False,
  })
  hot: Is;

  @Column({
    type: DataType.TINYINT({ length: 1 }),
    comment: "是否置顶",
    defaultValue: Is.False,
  })
  top: Is;

  @Column({
    type: DataType.TINYINT({ length: 1 }),
    comment: "状态",
    defaultValue: Is.True,
  })
  status: Is;

  @Column({
    type: DataType.INTEGER.UNSIGNED,
    comment: "排序",
  })
  order: number;

  @Column({
    type: DataType.STRING(50),
    comment: "别名",
  })
  alias: string;
}
