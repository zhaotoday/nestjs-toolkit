import { ApiProperty } from "@nestjs/swagger";

export class RbacPermissionDto {
  @ApiProperty()
  readonly name: string;

  @ApiProperty()
  readonly code: string;

  @ApiProperty()
  readonly description: string;
}
