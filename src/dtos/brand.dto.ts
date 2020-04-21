import { ApiProperty } from "@nestjs/swagger";
import { Is } from "../enums/is.enum";

export class BrandDto {
  @ApiProperty({
    description: "名称",
    example: "阿里巴巴"
  })
  name: string;

  @ApiProperty({
    description: "Logo ID",
    example: 1
  })
  logoId: number;

  @ApiProperty({
    description: "链接",
    example: "https://www.baidu.com"
  })
  link: string;

  @ApiProperty({
    description: "状态",
    example: Is.True
  })
  status: number;

  @ApiProperty({
    description: "排序",
    example: 1
  })
  order: number;
}
