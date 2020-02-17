import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

export class QueryDto {
  @ApiProperty({
    description: "查询条件",
    example: JSON.stringify({ name: { $like: "%name%" } })
  })
  @ApiPropertyOptional()
  readonly where?: string;

  @ApiProperty({
    description: "偏移量",
    example: "0"
  })
  @ApiPropertyOptional()
  readonly offset?: number;

  @ApiProperty({
    description: "限量",
    example: "10"
  })
  @ApiPropertyOptional()
  readonly limit?: number;
}
