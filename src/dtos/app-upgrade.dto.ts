import { ApiProperty } from "@nestjs/swagger";
import { PublishStatus } from "../enums/publish-status.enum";
import { AppPlatform } from "../enums/app-platform.enum";
import { AppPackageType } from "../enums/app-package-type.enum";

export class AppUpgradeDto {
  @ApiProperty({
    description: "平台",
    example: AppPlatform.Android,
  })
  platform: AppPlatform;

  @ApiProperty({
    description: "包类型",
    example: AppPackageType.Wgt,
  })
  packageType: AppPackageType;

  @ApiProperty({
    description: "版本名称",
    example: "1.0.0",
  })
  versionName: string;

  @ApiProperty({
    description: "版本号",
    example: 100,
  })
  versionCode: string;

  @ApiProperty({
    description: "App 文件 ID",
    example: 1,
  })
  appFileId: number;

  @ApiProperty({
    description: "WGt 文件 ID",
    example: 1,
  })
  wgtFileId: number;

  @ApiProperty({
    description: "更新日志",
    example: "XXX",
  })
  log: string;

  @ApiProperty({
    description: "状态（上架、下架）",
    example: PublishStatus.On,
  })
  status: string;
}
