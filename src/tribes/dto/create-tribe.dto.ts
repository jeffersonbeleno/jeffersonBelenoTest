import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, MaxLength, Min } from "class-validator";

export class CreateTribeDto {
  @IsNotEmpty()
  @MaxLength(50)
  @ApiProperty()
  readonly name: string;

  @ApiProperty()
  readonly status: number;

  @ApiProperty()
  organizationId: bigint
}
