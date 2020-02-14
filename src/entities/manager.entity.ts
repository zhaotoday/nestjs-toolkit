import { Table, Column, Model, DataType } from "sequelize-typescript";

@Table({
  tableName: "managers"
})
export class Manager extends Model<Manager> {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    comment: "ID"
  })
  id: number;

  @Column({
    type: DataType.STRING(50),
    comment: "用户名"
  })
  username: string;

  @Column({
    type: DataType.STRING(100),
    comment: "密码"
  })
  password: string;

  @Column({
    type: DataType.JSON,
    comment: "角色"
  })
  roles: object;

  @Column({
    type: DataType.TINYINT,
    comment: "状态"
  })
  status: number;
}
