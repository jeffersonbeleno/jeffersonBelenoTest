import { Injectable } from '@nestjs/common';
import { CreateOrganizationDto } from './dto/create-organization.dto';
import { UpdateOrganizationDto } from './dto/update-organization.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class OrganizationsService {
  constructor(private prisma: PrismaService) {}

  create(createOrganizationDto: CreateOrganizationDto) {
    return this.prisma.organization.create({ data: createOrganizationDto });
  }

  findAll() {
    return this.prisma.organization.findMany();
  }

  findOne(id: string) {
    return this.prisma.organization.findUnique({ where: { id: BigInt(id) } });
  }

  update(id: string, updateOrganizationDto: UpdateOrganizationDto) {
    return this.prisma.organization.update({ where: { id: BigInt(id) }, data: updateOrganizationDto});
  }

  remove(id: string) {
    return this.prisma.organization.delete({ where: { id: BigInt(id) }});
  }
}
