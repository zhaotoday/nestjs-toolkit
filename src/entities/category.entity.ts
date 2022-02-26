import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table({
  tableName: "categories",
  comment: "分类",
})
export class Category extends Model {
  @Column({
    type: DataType.STRING(200),
    comment: "名称",
  })
  name: string;

  @Column({
    type: DataType.INTEGER.UNSIGNED,
    comment: "图标文件 ID",
  })
  iconFileId: number;

  @Column({
    type: DataType.INTEGER.UNSIGNED,
    comment: "Banner ID",
  })
  bannerFileId: number;

  @Column({
    type: DataType.TEXT({ length: "tiny" }),
    comment: "描述",
  })
  description: string;

  @Column({
    type: DataType.STRING(50),
    comment: "别名",
  })
  alias: string;

  @Column({
    type: DataType.INTEGER.UNSIGNED,
    comment: "排序",
  })
  order: number;
}
