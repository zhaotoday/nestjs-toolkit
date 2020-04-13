import { ApiProperty } from "@nestjs/swagger";

class WxApiJsSdkConfigDto {
  @ApiProperty({
    description: "当前页面 URL",
    example: "http://www.baidu.com/"
  })
  url: string;
}
