import { Injectable } from '@nestjs/common';
import { CreateTribeDto } from './dto/create-tribe.dto';
import { UpdateTribeDto } from './dto/update-tribe.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class TribesService {
  constructor(private prisma: PrismaService) {}

  create(createTribeDto: CreateTribeDto) {
    return this.prisma.tribe.create({ data: createTribeDto });
  }

  findAll() {
    return this.prisma.tribe.findMany();
  }

  findOne(id: string) {
    return this.prisma.tribe.findUnique({ where: { id: BigInt(id) } });
  }

  update(id: string, updateTribeDto: UpdateTribeDto) {
    return this.prisma.tribe.update({ where: { id: BigInt(id) }, data: updateTribeDto });
  }

  remove(id: string) {
    return this.prisma.tribe.delete({ where: { id: BigInt(id) }});
  }
}
