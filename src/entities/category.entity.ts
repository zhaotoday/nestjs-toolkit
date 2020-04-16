import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table({
  tableName: "categories"
})
export class Category extends Model<Category> {
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
    type: DataType.INTEGER.UNSIGNED,
    comment: "图标 ID"
  })
  iconId: number;

  @Column({
    type: DataType.INTEGER.UNSIGNED,
    comment: "Banner ID"
  })
  bannerId: number;

  @Column({
    type: DataType.TEXT({ length: "tiny" }),
    comment: "描述"
  })
  description: string;

  @Column({
    type: DataType.STRING(50),
    comment: "别名"
  })
  alias: string;

  @Column({
    type: DataType.INTEGER.UNSIGNED,
    comment: "排序"
  })
  order: number;
}
