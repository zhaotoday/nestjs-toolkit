import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

export class PointDto {
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
    description: "类型",
    example: "POINT_CONSUMPTION"
  })
  type: string;

  @ApiProperty({
    description: "积分值",
    example: 100
  })
  value: number;

  @ApiProperty({
    description: "相关数据",
    example: {
      event: "BUY_PRODUCT",
      model: "Product",
      id: 1,
      count: 1
    }
  })
  data: object;
}
