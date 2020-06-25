import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table({
  tableName: "rbacResource",
  comment: "RBAC 资源"
})
export class RbacResource extends Model<RbacResource> {
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
    comment: "名称"
  })
  name: string;

  @Column({
    type: DataType.STRING(50),
    comment: "代码"
  })
  code: string;

  @Column({
    type: DataType.TEXT({ length: "tiny" }),
    comment: "描述"
  })
  description: string;
}
