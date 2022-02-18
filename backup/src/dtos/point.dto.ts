import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { PointType } from "../enums/point-type.enum";

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
    description: "订单 ID",
    example: 1
  })
  orderId: number;

  @ApiProperty({
    description: "类型",
    example: PointType.BuyProductDeducting
  })
  type: string;

  @ApiProperty({
    description: "积分值",
    example: 100
  })
  value: number;
}
