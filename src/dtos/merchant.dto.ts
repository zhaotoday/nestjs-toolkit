import { ApiProperty } from "@nestjs/swagger";
import { CheckStatus } from "../enums/check-status.enum";

export class MerchantDto {
  @ApiProperty({
    description: "微信用户 ID",
    example: 1
  })
  wxUserId: number;

  @ApiProperty({
    description: "名称",
    example: "淳百味"
  })
  name: string;

  @ApiProperty({
    description: "地址 ID",
    example: 1
  })
  addressId: number;

  @ApiProperty({
    description: "图片 ID 集合",
    example: [1, 2, 3]
  })
  pictureIds: number[];

  @ApiProperty({
    description: "手机号",
    example: "13950442340"
  })
  phoneNumber: string;

  @ApiProperty({
    description: "状态",
    example: CheckStatus.Checking
  })
  status: number;
}
