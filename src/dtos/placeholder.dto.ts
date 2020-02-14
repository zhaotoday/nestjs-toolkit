import { ApiProperty } from "@nestjs/swagger";

export class PlaceholderDto {
  @ApiProperty()
  readonly placeholder: string;
}
