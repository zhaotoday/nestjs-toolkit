import { ApiProperty } from "@nestjs/swagger";

export class CollectionDto {
  @ApiProperty({
    description: "微信用户 ID",
    example: 1
  })
  wxUserId: number;

  @ApiProperty({
    description: "收藏的商品 ID 集合",
    example: [1, 2, 3]
  })
  productIds: number[];
}
