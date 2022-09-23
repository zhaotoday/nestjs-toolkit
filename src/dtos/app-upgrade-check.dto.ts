import { ApiProperty } from "@nestjs/swagger";
import { AppPlatform } from "../enums/app-platform.enum";

export class AppUpgradeCheckDto {
  @ApiProperty({
    description: "平台",
    example: AppPlatform.Android,
  })
  platform: AppPlatform;

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
}
