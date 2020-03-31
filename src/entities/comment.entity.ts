import { Table, Column, Model, DataType } from "sequelize-typescript";

@Table({
  tableName: "comments"
})
export class Comment extends Model<Comment> {
  @Column({
    type: DataType.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    comment: "ID"
  })
  id: number;

  @Column({
    type: DataType.TINYINT({ length: 1 }),
    comment: "评分"
  })
  rate: number;

  @Column({
    type: DataType.TEXT({ length: "long" }),
    comment: "内容"
  })
  content: string;

  @Column({
    type: DataType.TINYINT({ length: 1 }),
    comment: "状态",
    defaultValue: 0
  })
  status: number;
}
