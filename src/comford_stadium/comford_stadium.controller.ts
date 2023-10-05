import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ComfordStadiumService } from './comford_stadium.service';
import { CreateComfordStadiumDto } from './dto/create-comford_stadium.dto';
import { UpdateComfordStadiumDto } from './dto/update-comford_stadium.dto';

@Controller('comford-stadium')
export class ComfordStadiumController {
  constructor(private readonly comfordStadiumService: ComfordStadiumService) {}

  @Post()
  create(@Body() createComfordStadiumDto: CreateComfordStadiumDto) {
    return this.comfordStadiumService.create(createComfordStadiumDto);
  }

  @Get()
  findAll() {
    return this.comfordStadiumService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.comfordStadiumService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateComfordStadiumDto: UpdateComfordStadiumDto) {
    return this.comfordStadiumService.update(+id, updateComfordStadiumDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.comfordStadiumService.remove(+id);
  }
}
