import { ApiProperty } from "@nestjs/swagger"

export class CreateOrganizationDto {
  @ApiProperty()
  readonly name: string

  @ApiProperty()
  readonly status: number
}
