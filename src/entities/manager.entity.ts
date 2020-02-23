import { Table, Column, Model, DataType } from "sequelize-typescript";
import { Is } from "../enums/is.enum";

@Table({
  tableName: "managers"
})
export class Manager extends Model<Manager> {
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
    type: DataType.TINYINT({ length: 1 }),
    comment: "状态",
    defaultValue: Is.True
  })
  status: number;
}
