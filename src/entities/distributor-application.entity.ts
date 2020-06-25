import { Column, DataType, Model, Table } from "sequelize-typescript";
import { CheckStatus } from "../enums/check-status.enum";

@Table({
  tableName: "distributorApplications",
  comment: "分销员申请"
})
export class DistributorApplication extends Model<DistributorApplication> {
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
    comment: "审核状态",
    defaultValue: CheckStatus.Checking
  })
  status: number;
}
