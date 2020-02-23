import { ApiProperty } from "@nestjs/swagger";
import { Is } from "../enums/is.enum";

export class WxUserDto {
  @ApiProperty({
    description: "OPEN ID",
    example: "omMee4tymy2V-axAKL5EpKwUuWG8"
  })
  readonly openId: string;

  @ApiProperty({
    description: "UNION ID",
    example: "o-2fp5rjHIq5xE52gGwriP1qFhf8"
  })
  readonly unionId: string;

  @ApiProperty({
    description: "头像",
    example:
      "https://wx.qlogo.cn/mmopen/vi_32/DYAIOgq83eopRYpiak5MdicbcLY43zibSP1HTnqU6yHhqnQ614sxV6slPpxJzgXfuzJicneSDEssjicqOkiaIiawTF3dw/132"
  })
  readonly avatarUrl: string;

  @ApiProperty({
    description: "姓名",
    example: "赵金添"
  })
  readonly name: string;

  @ApiProperty({
    description: "昵称",
    example: "心晴"
  })
  readonly nickName: string;

  @ApiProperty({
    description: "性别",
    example: "1"
  })
  readonly gender: string;

  @ApiProperty({
    description: "手机号",
    example: "13950442340"
  })
  readonly phoneNumber: string;

  @ApiProperty({
    description: "生日",
    example: "1985-02-05"
  })
  readonly birthday: string;

  @ApiProperty({
    description: "语言",
    example: "zh_CN"
  })
  readonly language: string;

  @ApiProperty({
    description: "国家",
    example: "China"
  })
  readonly country: string;

  @ApiProperty({
    description: "省份",
    example: "Fujian"
  })
  readonly province: string;

  @ApiProperty({
    description: "城市",
    example: "Fuzhou"
  })
  readonly city: string;

  @ApiProperty({
    description: "所有数据"
  })
  readonly data: string;

  @ApiProperty({
    description: "状态",
    example: Is.True
  })
  readonly status: number;
}
