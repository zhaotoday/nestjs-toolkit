import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { Is } from "../enums/is.enum";

export class UserCouponDto {
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
    description: "优惠券 ID",
    example: 1,
  })
  couponId: number;

  @ApiProperty({
    description: "是否已使用",
    example: Is.False,
  })
  status: Is;
}
