import { ApiProperty } from "@nestjs/swagger";
import { Is } from "../enums/is.enum";
import { CouponType } from "../enums/coupon-type.enum";
import { CouponObjectType } from "../enums/coupon-object-type.enum";

export class CouponDto {
  @ApiProperty({
    description: "优惠券号",
    example: "2001011106289214"
  })
  no: string;

  @ApiProperty({
    description: "名称",
    example: "新手优惠券"
  })
  name: string;

  @ApiProperty({
    description: "描述",
    example: "新注册用户优惠券"
  })
  description: string;

  @ApiProperty({
    description: "类型",
    example: CouponType.Reduction
  })
  type: string;

  @ApiProperty({
    description: "抵扣金额",
    example: 100
  })
  deductAmount: number;

  @ApiProperty({
    description: "最低消费金额",
    example: 100
  })
  minConsumeAmount: number;

  @ApiProperty({
    description: "使用对象类型",
    example: CouponObjectType.All
  })
  objectType: string;

  @ApiProperty({
    description: "指定商品分类 ID 集合",
    example: [1, 2]
  })
  categoryIds: number[];

  @ApiProperty({
    description: "指定商品 ID 集合",
    example: [1, 2]
  })
  productIds: number[];

  @ApiProperty({
    description: "有效期，单位：天",
    example: 30
  })
  period: number;

  @ApiProperty({
    description: "状态",
    example: Is.True
  })
  status: number;
}
