import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

export class UserUpdateUserInfoDto {
  @ApiProperty({
    description: "自定义头像文件 ID",
    example: 1,
  })
  @ApiPropertyOptional()
  avatarFileId: number;

  @ApiProperty({
    description: "姓名",
    example: "赵金添",
  })
  @ApiPropertyOptional()
  name: string;

  @ApiProperty({
    description: "昵称",
    example: "心晴",
  })
  @ApiPropertyOptional()
  nickName: string;

  @ApiProperty({
    description: "性别",
    example: 1,
  })
  @ApiPropertyOptional()
  gender: number;

  @ApiProperty({
    description: "个人路径",
    example: "/my/page/url",
  })
  @ApiPropertyOptional()
  url: string;
}
