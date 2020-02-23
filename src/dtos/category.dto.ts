import { ApiProperty } from "@nestjs/swagger";

export class CategoryDto {
  @ApiProperty({
    description: "父级 ID",
    example: 1
  })
  parentId: number;

  @ApiProperty({
    description: "名称",
    example: "测试分类"
  })
  name: string;

  @ApiProperty({
    description: "图标 ID",
    example: 1
  })
  iconId: number;

  @ApiProperty({
    description: "Banner ID",
    example: 1
  })
  bannerId: number;

  @ApiProperty({
    description: "描述",
    example: "这是描述"
  })
  description: string;
}
