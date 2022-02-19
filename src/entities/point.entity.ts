import { Column, DataType, Model, Table } from "sequelize-typescript";
import { PointType } from "../enums/point-type.enum";

@Table({
  tableName: "points",
  comment: "积分",
})
export class Point extends Model {
  @Column({
    type: DataType.ENUM.apply(null, Object.values(PointType)),
    comment: "类型",
  })
  type: string;

  @Column({
    type: DataType.INTEGER,
    comment: "积分值",
  })
  value: number;

  @Column({
    type: DataType.JSON,
    comment: "相关数据",
  })
  data: object;
}
