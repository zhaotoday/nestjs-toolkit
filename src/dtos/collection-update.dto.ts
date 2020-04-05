import { ApiProperty } from "@nestjs/swagger";

export class CollectionUpdateDto {
  @ApiProperty({
    description: "收藏的商品 ID",
    example: 1
  })
  productId: number;
}
