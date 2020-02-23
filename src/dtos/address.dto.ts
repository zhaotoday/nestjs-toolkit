import { ApiProperty } from "@nestjs/swagger";
import { Is, AddressTag } from "nestjs-toolkit";

export class AddressDto {
  @ApiProperty({
    description: "微信用户 ID",
    example: 1
  })
  wxUserId: string;

  @ApiProperty({
    description: "收货人",
    example: "赵金添"
  })
  name: string;

  @ApiProperty({
    description: "性别",
    example: "1"
  })
  gender: string;

  @ApiProperty({
    description: "手机号",
    example: "13950442340"
  })
  phoneNumber: string;

  @ApiProperty({
    description: "位置",
    example: {
      id: "B0FFFGM9C1",
      city: "福州市",
      name: "贵安新天地贵富苑W区",
      address: "世纪金源大道南50米",
      cityCode: "0591",
      district: "连江县",
      latitude: "26.239145",
      province: "福建省",
      longitude: "119.398064"
    }
  })
  location: object;

  @ApiProperty({
    description: "门牌号",
    example: "21号楼204"
  })
  room: string;

  @ApiProperty({
    description: "标签",
    example: AddressTag.Home
  })
  tag: string;

  @ApiProperty({
    description: "是否默认",
    example: Is.False
  })
  default: number;
}
