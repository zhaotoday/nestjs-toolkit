import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

export class RbacResourceDto {
  @ApiProperty({
    description: "ID",
    example: 1,
  })
  @ApiPropertyOptional()
  id?: number;

  @ApiProperty({
    description: "名称",
    example: "微信会员",
  })
  readonly name: string;

  @ApiProperty({
    description: "代码",
    example: "wxUsers",
  })
  readonly code: string;

  @ApiProperty({
    description: "描述",
    example: "微信会员",
  })
  readonly description: string;
}
