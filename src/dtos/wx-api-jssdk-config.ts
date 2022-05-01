import { ApiProperty } from "@nestjs/swagger";

export class WxApiJsSdkConfigDto {
  @ApiProperty({
    description: "当前页面 URL",
    example: "http://www.baidu.com/",
  })
  url: string;
}
