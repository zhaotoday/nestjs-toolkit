import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

export class QueryDto {
  @ApiProperty()
  @ApiPropertyOptional()
  readonly where?: object;

  @ApiProperty()
  @ApiPropertyOptional()
  readonly offset?: number;

  @ApiProperty()
  @ApiPropertyOptional()
  readonly limit?: number;
}
