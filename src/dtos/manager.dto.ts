import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { Is } from "../enums/is.enum";

export class ManagerDto {
  @ApiProperty({
    description: "ID",
    example: 1,
  })
  @ApiPropertyOptional()
  id?: number;

  @ApiProperty({
    description: "用户名",
    example: "admin",
  })
  username: string;

  @ApiProperty({
    description: "密码",
    example: "$2a$10$UCzVq2ZZxowGiQvg.EXVd.UixD2Gnnxh.MRiDiMajyVpH9rc5Xg3G",
  })
  hashedPassword: string;

  @ApiProperty({
    type: "json",
    description: "角色",
    example: ["ADMIN"],
  })
  roles: string;

  @ApiProperty({
    description: "状态",
    example: Is.True,
  })
  status: number;
}
