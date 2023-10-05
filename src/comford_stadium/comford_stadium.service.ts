import { Injectable } from '@nestjs/common';
import { CreateComfordStadiumDto } from './dto/create-comford_stadium.dto';
import { UpdateComfordStadiumDto } from './dto/update-comford_stadium.dto';
import { InjectModel } from '@nestjs/sequelize';
import { ComfordStadium } from './models/comford_stadium.model';

@Injectable()
export class ComfordStadiumService {
  constructor(@InjectModel(ComfordStadium) private comfordSRepo:typeof ComfordStadium){}
  async create(createComfordStadiumDto: CreateComfordStadiumDto) {
    return await this.comfordSRepo.create(createComfordStadiumDto);
  }

  async findAll() {
    return await this.comfordSRepo.findAll();
  }

  async findOne(id: number) {
    return await this.comfordSRepo.findOne({where:{id}});
  }

  async update(id: number, updateComfordStadiumDto: UpdateComfordStadiumDto) {
    const updated = await this.comfordSRepo.update(updateComfordStadiumDto,{where:{id},returning:true});
    return updated[1][0].dataValues;
  }

  async remove(id: number) {
    return await this.comfordSRepo.destroy({where:{id}});
  }
}
