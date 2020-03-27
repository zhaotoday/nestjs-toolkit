import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey
} from "sequelize-typescript";
import { Is } from "../enums/is.enum";
import { Category } from "./category.entity";

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
    comment: "状态",
    defaultValue: Is.True
  })
  status: number;

  @ForeignKey(() => Category)
  @Column({
    type: DataType.INTEGER.UNSIGNED,
    comment: "分类 ID"
  })
  categoryId: number;
}
