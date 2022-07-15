import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, MaxLength, IsInt } from "class-validator";

export class CreateTribeDto {
  @IsNotEmpty()
  @MaxLength(50)
  @ApiProperty()
  readonly name: string;

  @IsInt()
  @ApiProperty()
  readonly status: number;

  @ApiProperty()
  organizationId: bigint
}
