import { Column, DataType, Model, Table } from "sequelize-typescript";
import { CheckStatus } from "../enums/check-status.enum";

@Table({
  tableName: "messages",
  comment: "留言",
})
export class Message extends Model {
  @Column({
    type: DataType.STRING(50),
    comment: "联系人",
  })
  contactName: string;

  @Column({
    type: DataType.STRING(100),
    comment: "联系方式",
  })
  contact: string;

  @Column({
    type: DataType.TEXT({ length: "long" }),
    comment: "内容",
  })
  content: string;

  @Column({
    type: DataType.TINYINT({ length: 1 }),
    comment: "状态",
    defaultValue: CheckStatus.Checking,
  })
  status: number;
}
