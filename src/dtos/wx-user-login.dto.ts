import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { WxUserLoginType } from "../enums/wx-user-login-type.enum";

export class WxUserLoginDto {
  @ApiProperty({
    type: "登陆类型",
    example: WxUserLoginType.Mp
  })
  type: string;

  @ApiProperty({
    description: "用户登录凭证",
    example: "071HWWes1cTrzj0LhYfs1X5Ves1HWWeR"
  })
  code: string;

  @ApiProperty({
    description: "包括敏感数据在内的完整用户信息的加密数据",
    example:
      "toG75MycWXtEpWu61q0dDrqg2RT0O9E0UzImbzQ2nhH6TTrAWlDiPiA55/YNlOXfqsL/AI3K6+9xJ10+0ZT01FHjwcurnHTYHnl9xK8qtgqCyKr100cXZQssgSJnX5RM4PFh5PaeJNu8rtihpJqv1t0Ep1pj8Eo9Es4nv+mzfe4lJvNtIYL+rXqFBLoWM+2eexeNcS6/SULFdif/1enDPVdtxb6e9pB1RLKixrprMIXkg8Yu2CBBgtPStgQvPxwZ4AwTV2XMirC4dDPXl/qchQ7RIYWugDR0Y2vINMg4Fd5fKIqqKqyQzXP5rIvcsNZz8fbBi3dFnw2KtnYw1cGVe/mKXi00v9i++x7h5TLhGn8MEhep4hvBKm6wGFObHG7CIn9DEsf0ltKPNUHhJPoWVCYZFv5Y9aML+8VAYNO06381Yn93lE4DqeEIyh/RRtCtdSW796mf51uqQs51LSTiUqL46cH+2R6WlV+oi7rnCQKJpOjTz7Oxk9aus2vLZTOz"
  })
  @ApiPropertyOptional()
  encryptedData: string;

  @ApiProperty({
    description: "加密算法的初始向量",
    example: "Dspo84FF6c+S/1SKo3QlZg=="
  })
  @ApiPropertyOptional()
  iv: string;

  @ApiProperty({
    description: "时间戳",
    example: "1591510198505"
  })
  _: string;

  @ApiProperty({
    description: "页面路由",
    example: "/pages/my/addresses/list/index"
  })
  page: string;

  @ApiProperty({
    description: "额外数据",
    example: {
      data1: 1,
      data2: 2
    }
  })
  extData: {
    [propName: string]: any;
  };
}
