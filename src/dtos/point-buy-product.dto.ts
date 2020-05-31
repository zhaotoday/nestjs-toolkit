import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { ProductDto } from "./product.dto";

export class PointBuyProductDto {
  @ApiProperty({
    description: "ID",
    example: 1
  })
  @ApiPropertyOptional()
  id?: number;

  @ApiProperty({
    description: "微信用户 ID",
    example: 1
  })
  wxUserId: number;

  @ApiProperty({
    description: "购买产品",
    example: []
  })
  products: ProductDto[];

  @ApiProperty({
    description: "消费积分",
    example: 100
  })
  points: number;

  @ApiProperty({
    description: "地址 ID",
    example: 1
  })
  @ApiPropertyOptional()
  addressId?: number;

  @ApiProperty({
    description: "备注",
    example: "XXX"
  })
  @ApiPropertyOptional()
  remark?: string;
}
