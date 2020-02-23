import { ApiProperty } from "@nestjs/swagger";
import { Is } from "../enums/is.enum";

export class ProductDto {
  @ApiProperty({
    description: "分类 ID",
    example: 1
  })
  categoryId: number;

  @ApiProperty({
    description: "名称",
    example: "回锅肉"
  })
  name: string;

  @ApiProperty({
    description: "价格",
    example: 100.01
  })
  price: number;

  @ApiProperty({
    description: "原价",
    example: 200.01
  })
  originalPrice: number;

  @ApiProperty({
    description: "库存",
    example: 1000
  })
  stock: number;

  @ApiProperty({
    description: "图片 ID",
    example: 1
  })
  picture: number;

  @ApiProperty({
    description: "描述",
    example: "这是描述"
  })
  description: string;

  @ApiProperty({
    description: "详情",
    example: "这是详情"
  })
  content: string;

  @ApiProperty({
    description: "是否新品",
    example: Is.False
  })
  new: number;

  @ApiProperty({
    description: "是否推荐",
    example: Is.False
  })
  recommended: number;

  @ApiProperty({
    description: "是否上架",
    example: Is.True
  })
  status: number;
}