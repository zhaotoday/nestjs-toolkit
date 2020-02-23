import { Table, Column, Model, DataType } from "sequelize-typescript";

@Table({
  tableName: "files"
})
export class File extends Model<File> {
  @Column({
    type: DataType.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    comment: "ID"
  })
  id: number;

  @Column({
    type: DataType.STRING(36),
    comment: "UUID"
  })
  uuid: string;

  @Column({
    type: DataType.STRING(200),
    comment: "名称"
  })
  name: string;

  @Column({
    type: DataType.STRING(50),
    comment: "类型"
  })
  type: string;

  @Column({
    type: DataType.STRING(50),
    comment: "大小"
  })
  size: string;

  @Column({
    type: DataType.STRING(10),
    comment: "目录"
  })
  dir: string;

  @Column({
    type: DataType.STRING(10),
    comment: "后缀"
  })
  ext: string;
}
