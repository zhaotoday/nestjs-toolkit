import { ApiProperty } from "@nestjs/swagger";

export class CollectionUpdateProductIdsDto {
  @ApiProperty({
    description: "收藏的商品 ID",
    example: 1,
  })
  productId: number;
}
