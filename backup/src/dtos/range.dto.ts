import { ApiProperty } from "@nestjs/swagger";

export class RangeDto {
  @ApiProperty({
    description: "从 XXX",
    example: 0
  })
  from: number;

  @ApiProperty({
    description: "到 XXX",
    example: 100
  })
  to: number;
}
