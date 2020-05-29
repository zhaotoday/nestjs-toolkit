import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table({
  tableName: "videos"
})
export class Video extends Model<Video> {
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
    comment: "文件 ID"
  })
  fileId: string;

  @Column({
    type: DataType.STRING(200),
    comment: "文件 URL"
  })
  fileUrl: string;

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
}
