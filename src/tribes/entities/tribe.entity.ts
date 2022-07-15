import { Tribe } from "@prisma/client";
import { ApiProperty } from "@nestjs/swagger";

export class TribeEntity implements Tribe {
  @ApiProperty()
  readonly id: bigint;

  @ApiProperty()
  readonly name: string;

  @ApiProperty()
  readonly status: number;

  @ApiProperty()
  readonly organizationId: bigint;
}
