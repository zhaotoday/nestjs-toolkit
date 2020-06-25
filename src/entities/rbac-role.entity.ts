import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table({
  tableName: "rbacRoles",
  comment: "RBAC 角色"
})
export class RbacRole extends Model<RbacRole> {
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
    allowNull: false,
    comment: "名称"
  })
  name: string;

  @Column({
    type: DataType.JSON,
    comment: "资源"
  })
  resources: object;

  @Column({
    type: DataType.TEXT({ length: "tiny" }),
    comment: "描述"
  })
  description: string;
}
