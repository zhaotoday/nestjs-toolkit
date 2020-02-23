import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

export class DictsParamDto {
  @ApiProperty({
    description: "名称",
    example: "Gender"
  })
  @ApiPropertyOptional()
  name: string;
}
