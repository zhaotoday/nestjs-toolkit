import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { CheckStatus } from "../enums/check-status.enum";

export class DistributorApplicationDto {
  @ApiProperty({
    description: "ID",
    example: 1
  })
  @ApiPropertyOptional()
  id?: number;

  @ApiProperty({
    description: "用户 ID",
    example: 1
  })
  userId: number;

  @ApiProperty({
    description: "审核状态",
    example: CheckStatus.Checking
  })
  status: number;
}
