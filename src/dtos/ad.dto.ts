import { ApiProperty } from "@nestjs/swagger";
import { Is } from "../enums/is.enum";

export class AdDto {
  @ApiProperty({
    description: "标题",
    example: "XXX 活动"
  })
  title: string;

  @ApiProperty({
    description: "图片 ID",
    example: 1
  })
  pictureId: number;

  @ApiProperty({
    description: "链接",
    example: "https://www.baidu.com/"
  })
  link: string;

  @ApiProperty({
    description: "状态",
    example: Is.True
  })
  status: number;
}
