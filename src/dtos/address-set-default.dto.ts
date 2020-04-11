import { ApiProperty } from "@nestjs/swagger";
import { Is } from "../enums/is.enum";

export class AddressSetDefaultDto {
  @ApiProperty({
    description: "微信用户 ID",
    example: 1
  })
  wxUserId: number;

  @ApiProperty({
    description: "地址 ID",
    example: Is.False
  })
  id: number;
}
