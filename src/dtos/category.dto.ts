import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

export class CategoryDto {
  @ApiProperty({
    description: "ID",
    example: 1,
  })
  @ApiPropertyOptional()
  id?: number;

  @ApiProperty({
    description: "父级 ID",
    example: 1,
  })
  parentId: number;

  @ApiProperty({
    description: "名称",
    example: "测试分类",
  })
  name: string;

  @ApiProperty({
    description: "图标文件 ID",
    example: 1,
  })
  iconFileId: number;

  @ApiProperty({
    description: "Banner 文件 ID",
    example: 1,
  })
  bannerFileId: number;

  @ApiProperty({
    description: "描述",
    example: "这是描述",
  })
  description: string;

  @ApiProperty({
    description: "别名",
    example: "products",
  })
  alias: string;

  @ApiProperty({
    description: "排序",
    example: 1,
  })
  order: number;
}
