import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey,
  BelongsTo
} from "sequelize-typescript";

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

  @ForeignKey(() => Category)
  @Column({
    type: DataType.INTEGER.UNSIGNED,
    comment: "父级 ID"
  })
  parentId: number;

  @BelongsTo(() => Category)
  parent: Category;

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
}
