import { ApiProperty } from "@nestjs/swagger";

export class WxUserGetOpenIdDto {
  @ApiProperty({
    description: "用户登录凭证",
    example: "071HWWes1cTrzj0LhYfs1X5Ves1HWWeR"
  })
  readonly code: string;
}
