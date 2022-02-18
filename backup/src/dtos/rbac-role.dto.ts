import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

export class RbacRoleDto {
  @ApiProperty({
    description: "ID",
    example: 1
  })
  @ApiPropertyOptional()
  id?: number;

  @ApiProperty({
    description: "名称",
    example: "超级管理员"
  })
  name: string;

  @ApiProperty({
    description: "资源",
    example: ["wxUsers", "files"]
  })
  resources: object;

  @ApiProperty({
    description: "描述",
    example: "用户所有权限"
  })
  description: string;
}
