import { ApiProperty } from "@nestjs/swagger";

export class WxUserDto {
  @ApiProperty()
  readonly openId: string;

  @ApiProperty()
  readonly unionId: string;

  @ApiProperty()
  readonly avatarUrl: string;

  @ApiProperty()
  readonly name: string;

  @ApiProperty()
  readonly nickName: string;

  @ApiProperty()
  readonly gender: string;

  @ApiProperty()
  readonly language: string;

  @ApiProperty()
  readonly province: string;

  @ApiProperty()
  readonly city: string;

  @ApiProperty()
  readonly country: string;

  @ApiProperty()
  readonly phoneNumber: string;

  @ApiProperty()
  readonly birthday: string;

  @ApiProperty()
  readonly status: string;

  @ApiProperty()
  readonly data: string;
}
