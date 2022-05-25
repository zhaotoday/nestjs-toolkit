import { Column, DataType, Model, Table } from "sequelize-typescript";
import { Is } from "../enums/is.enum";
import { AppPlatform } from "../enums/app-platform.enum";
import { AppPackageType } from "../enums/app-package-type.enum";

@Table({
  tableName: "appUpgrades",
  comment: "App 升级",
})
export class AppUpgrade extends Model {
  @Column({
    type: DataType.ENUM.apply(null, Object.values(AppPlatform)),
    comment: "平台",
  })
  platform: string;

  @Column({
    type: DataType.ENUM.apply(null, Object.values(AppPackageType)),
    comment: "包类型",
  })
  packageType: string;

  @Column({
    type: DataType.STRING(100),
    comment: "版本名称",
  })
  versionName: string;

  @Column({
    type: DataType.STRING(100),
    comment: "版本号",
  })
  versionCode: string;

  @Column({
    type: DataType.INTEGER.UNSIGNED,
    comment: "App 文件 ID",
  })
  appFileId: number;

  @Column({
    type: DataType.INTEGER.UNSIGNED,
    comment: "Wgt 文件 ID",
  })
  wgtFileId: number;

  @Column({
    type: DataType.TEXT("tiny"),
    comment: "更新日志",
  })
  log: string;

  @Column({
    type: DataType.TINYINT({ length: 1 }),
    comment: "状态（上架、下架）",
    defaultValue: Is.True,
  })
  status: number;
}
