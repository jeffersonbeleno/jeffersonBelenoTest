import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, MaxLength, Min } from "class-validator";

export class CreateOrganizationDto {
  @IsNotEmpty()
  @MaxLength(50)
  @ApiProperty()
  readonly name: string;

  @Min(1)
  @ApiProperty()
  readonly status: number;
}
