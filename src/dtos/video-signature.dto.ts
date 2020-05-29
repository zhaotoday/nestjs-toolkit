import { ApiProperty } from "@nestjs/swagger";

export class VideoSignatureDto {
  @ApiProperty({
    description: "参数",
    example: {
      procedure: "自适应码流"
    }
  })
  args: {
    [propName: string]: any;
  };
}
