import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

export class TemplateMessageDto {
  @ApiProperty({
    description: "OPEN ID",
    example: "XXX"
  })
  @ApiPropertyOptional()
  openId?: string;

  @ApiProperty({
    description: "First",
    example: "XXX"
  })
  @ApiPropertyOptional()
  first?: string;

  @ApiProperty({
    description: "Keyword1",
    example: "XXX"
  })
  @ApiPropertyOptional()
  keyword1?: string;

  @ApiProperty({
    description: "Keyword2",
    example: "XXX"
  })
  @ApiPropertyOptional()
  keyword2?: string;

  @ApiProperty({
    description: "Keyword3",
    example: "XXX"
  })
  @ApiPropertyOptional()
  keyword3?: string;

  @ApiProperty({
    description: "Keyword4",
    example: "XXX"
  })
  @ApiPropertyOptional()
  keyword4?: string;

  @ApiProperty({
    description: "Keyword5",
    example: "XXX"
  })
  @ApiPropertyOptional()
  keyword5?: string;

  @ApiProperty({
    description: "Keyword6",
    example: "XXX"
  })
  @ApiPropertyOptional()
  keyword6?: string;

  @ApiProperty({
    description: "Keyword7",
    example: "XXX"
  })
  @ApiPropertyOptional()
  keyword7?: string;

  @ApiProperty({
    description: "Keyword8",
    example: "XXX"
  })
  @ApiPropertyOptional()
  keyword8?: string;

  @ApiProperty({
    description: "Remark",
    example: "XXX"
  })
  @ApiPropertyOptional()
  remark?: string;

  @ApiProperty({
    description: "额外数据",
    example: {
      extraData1: 1,
      extraData2: 2
    }
  })
  extra: {
    [propName: string]: any;
  };
}
