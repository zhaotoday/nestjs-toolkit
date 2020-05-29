import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

export class VideoDto {
  @ApiProperty({
    description: "ID",
    example: 1
  })
  @ApiPropertyOptional()
  id?: number;

  @ApiProperty({
    description: "文件 ID",
    example: "5285890803208631045"
  })
  fileId: string;

  @ApiProperty({
    description: "文件 URL",
    example:
      "http://1251051722.vod2.myqcloud.com/8acdbaf9vodgzp1251051722/ac4ef2675285890803208632382/I7O9pok2ib4A.mp4"
  })
  fileUrl: string;

  @ApiProperty({
    description: "名称",
    example: "xxx.mp4"
  })
  readonly name: string;

  @ApiProperty({
    description: "类型",
    example: "video/mp4"
  })
  readonly type: string;

  @ApiProperty({
    description: "大小",
    example: "1024"
  })
  readonly size: string;
}
