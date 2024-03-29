import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { Is } from "../enums/is.enum";

export class FileDto {
  @ApiProperty({
    description: "ID",
    example: 1,
  })
  @ApiPropertyOptional()
  id?: number;

  @ApiProperty({
    description: "UUID",
    example: "5e054c72-6e5f-4288-974c-840d801576ea",
  })
  readonly uuid: string;

  @ApiProperty({
    description: "名称",
    example: "xxx.png",
  })
  readonly name: string;

  @ApiProperty({
    description: "类型",
    example: "image/png",
  })
  readonly type: string;

  @ApiProperty({
    description: "大小",
    example: "1024",
  })
  readonly size: string;

  @ApiProperty({
    description: "目录",
    example: "videos/1",
  })
  readonly dir: string;

  @ApiProperty({
    description: "日期",
    example: "2020-01-01",
  })
  readonly date: string;

  @ApiProperty({
    description: "后缀",
    example: "png",
  })
  readonly ext: string;

  @ApiProperty({
    description: "是否上传到服务器本地",
    example: Is.False,
  })
  local: Is;
}
