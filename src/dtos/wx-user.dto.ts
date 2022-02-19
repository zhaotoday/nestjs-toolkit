import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

export class WxUserDto {
  @ApiProperty({
    description: "ID",
    example: 1,
  })
  @ApiPropertyOptional()
  id?: number;

  @ApiProperty({
    description: "OPEN ID",
    example: "omMee4tymy2V-axAKL5EpKwUuWG8",
  })
  openId: string;

  @ApiProperty({
    description: "公众号 OPEN ID",
    example: "omMee4tymy2V-axAKL5EpKwUuWG8",
  })
  @ApiPropertyOptional()
  oaOpenId?: string;

  @ApiProperty({
    description: "网站应用 OPEN ID",
    example: "omMee4tymy2V-axAKL5EpKwUuWG8",
  })
  @ApiPropertyOptional()
  webOpenId?: string;

  @ApiProperty({
    description: "移动应用 OPEN ID",
    example: "omMee4tymy2V-axAKL5EpKwUuWG8",
  })
  @ApiPropertyOptional()
  mobileOpenId?: string;

  @ApiProperty({
    description: "UNION ID",
    example: "o-2fp5rjHIq5xE52gGwriP1qFhf8",
  })
  @ApiPropertyOptional()
  unionId?: string;

  @ApiProperty({
    description: "头像",
    example:
      "https://wx.qlogo.cn/mmopen/vi_32/DYAIOgq83eopRYpiak5MdicbcLY43zibSP1HTnqU6yHhqnQ614sxV6slPpxJzgXfuzJicneSDEssjicqOkiaIiawTF3dw/132",
  })
  avatarUrl: string;

  @ApiProperty({
    description: "自定义头像 ID",
    example: 1,
  })
  @ApiPropertyOptional()
  avatarId?: number;

  @ApiProperty({
    description: "姓名",
    example: "赵金添",
  })
  @ApiPropertyOptional()
  name?: string;

  @ApiProperty({
    description: "昵称",
    example: "心晴",
  })
  nickName: string;

  @ApiProperty({
    description: "性别",
    example: 1,
  })
  gender: number;

  @ApiProperty({
    description: "手机号",
    example: "13950442340",
  })
  @ApiPropertyOptional()
  phoneNumber?: string;

  @ApiProperty({
    description: "生日",
    example: "1985-02-05",
  })
  @ApiPropertyOptional()
  birthday?: string;

  @ApiProperty({
    description: "语言",
    example: "zh_CN",
  })
  language: string;

  @ApiProperty({
    description: "国家",
    example: "China",
  })
  country: string;

  @ApiProperty({
    description: "省份",
    example: "Fujian",
  })
  province: string;

  @ApiProperty({
    description: "城市",
    example: "Fuzhou",
  })
  city: string;
}
