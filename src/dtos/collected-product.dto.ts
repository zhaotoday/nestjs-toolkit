import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

export class CollectedProductDto {
  @ApiProperty({
    description: "ID",
    example: 1,
  })
  @ApiPropertyOptional()
  id?: number;

  @ApiProperty({
    description: "用户 ID",
    example: 1,
  })
  userId: number;

  @ApiProperty({
    description: "已收藏的商品 ID 集合",
    example: [1, 2, 3],
  })
  productIds: number[];
}
