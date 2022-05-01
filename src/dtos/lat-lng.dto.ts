import { ApiProperty } from "@nestjs/swagger";

export class LatLngDto {
  @ApiProperty({
    description: "经度",
    example: 118.9386749267578,
  })
  lng: number;

  @ApiProperty({
    description: "纬度",
    example: 25.86391945270875,
  })
  lat: number;
}
