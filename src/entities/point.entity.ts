import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table({
  tableName: "points"
})
export class Point extends Model<Point> {
  @Column({
    type: DataType.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    comment: "ID"
  })
  id: number;

  @Column({
    type: DataType.STRING(50),
    comment: "类型"
  })
  type: string;

  @Column({
    type: DataType.INTEGER,
    comment: "积分值"
  })
  value: number;

  @Column({
    type: DataType.JSON,
    comment: "相关数据"
  })
  data: object;
}
