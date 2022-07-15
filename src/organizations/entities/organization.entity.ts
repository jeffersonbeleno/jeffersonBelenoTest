import { Organization, Prisma } from "@prisma/client";
import { ApiProperty } from "@nestjs/swagger";

export class OrganizationEntity implements Organization {
  @ApiProperty()
  readonly id: bigint;

  @ApiProperty()
  readonly name: string;

  @ApiProperty()
  readonly status: number;
}
