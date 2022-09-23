import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { Is } from "../enums/is.enum";

export class UserDto {
  @ApiProperty({
    description: "昵称",
    example: "心晴",
  })
  nickName: string;

  @ApiProperty({
    description: "姓名",
    example: "赵金添",
  })
  name: string;

  @ApiProperty({
    description: "手机号码",
    example: "13950442340",
  })
  phoneNumber: string;

  @ApiProperty({
    description: "性别",
    example: 1,
  })
  gender: number;

  @ApiProperty({
    description: "邮箱",
    example: "729234283@qq.com",
  })
  mail: string;

  @ApiProperty({
    description: "账户密码",
    example: "$2a$10$JwaFlTfBWQsKmQ2riQtNbeptPJsYWd4z4MaMvCI.lQoIfTgGBBzLa",
  })
  hashedPassword: string;

  @ApiProperty({
    description: "自定义头像文件 ID",
    example: 1,
  })
  avatarFileId: number;

  @ApiProperty({
    description: "微信昵称",
    example: "心晴",
  })
  wxNickName: string;

  @ApiProperty({
    description: "微信头像",
    example:
      "https://thirdwx.qlogo.cn/mmopen/vi_32/DYAIOgq83eopRYpiak5MdicbcLY43zibSP1HTnqU6yHhqnQ614sxV6slPpxJzgXfuzJczSnd2DnAv5uKyu5TnZbdg/132",
  })
  wxAvatarUrl: string;

  @ApiProperty({
    description: "微信 UnionId",
    example: "o-2fp5rjHIq5xE52gGwriP1qFhf8",
  })
  wxUnionId: string;

  @ApiProperty({
    description: "微信小程序 OpenId",
    example: "omMee4tymy2V-axAKL5EpKwUuWG8",
  })
  wxMpOpenId: string;

  @ApiProperty({
    description: "微信公众号 H5 OpenId",
    example: "omMee4tymy2V-axAKL5EpKwUuWG8",
  })
  wxOaOpenId: string;

  @ApiProperty({
    description: "微信移动应用 OpenId",
    example: "omMee4tymy2V-axAKL5EpKwUuWG8",
  })
  wxAppOpenId: string;

  @ApiProperty({
    description: "微信网站应用 OpenId",
    example: "omMee4tymy2V-axAKL5EpKwUuWG8",
  })
  wxWebOpenId: string;

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

  @ApiProperty({
    description: "状态",
    example: Is.True,
  })
  @ApiPropertyOptional()
  status?: Is;
}
