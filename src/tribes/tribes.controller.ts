import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TribesService } from './tribes.service';
import { CreateTribeDto } from './dto/create-tribe.dto';
import { UpdateTribeDto } from './dto/update-tribe.dto';
import { TribeEntity } from './entities/tribe.entity';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';

@Controller('tribes')
@ApiTags('tribes')
export class TribesController {
  constructor(private readonly tribesService: TribesService) {}

  @Post()
  @ApiCreatedResponse({ type: TribeEntity })
  create(@Body() createTribeDto: CreateTribeDto) {
    return this.tribesService.create(createTribeDto);
  }

  @Get()
  @ApiOkResponse({ type: [TribeEntity] })
  findAll() {
    return this.tribesService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: TribeEntity })
  findOne(@Param('id') id: string) {
    return this.tribesService.findOne(id);
  }

  @Patch(':id')
  @ApiCreatedResponse({ type: TribeEntity })
  update(@Param('id') id: string, @Body() updateTribeDto: UpdateTribeDto) {
    return this.tribesService.update(id, updateTribeDto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: TribeEntity })
  remove(@Param('id') id: string) {
    return this.tribesService.remove(id);
  }
}
