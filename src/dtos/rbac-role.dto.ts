import { ApiProperty } from "@nestjs/swagger";

export class RbacRoleDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  permissions: object;

  @ApiProperty()
  description: string;
}
