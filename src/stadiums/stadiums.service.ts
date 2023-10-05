import { Injectable } from '@nestjs/common';
import { CreateStadiumDto } from './dto/create-stadium.dto';
import { UpdateStadiumDto } from './dto/update-stadium.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Stadium } from './models/stadium.model';
import { time } from 'console';
import { UpdateAdminDto } from 'src/admin/dto/update-admin.dto';

@Injectable()
export class StadiumsService {
  constructor(@InjectModel(Stadium) private stadiumRepo:typeof Stadium){}
  async create(createStadiumDto: CreateStadiumDto) {
    return await this.stadiumRepo.create(createStadiumDto);
  }

  async findAll() {
    return await this.stadiumRepo.findAll();
  }

  async findOne(id: number) {
    return await this.stadiumRepo.findOne({where:{id}});
  }

  async update(id: number, updateStadiumDto: UpdateStadiumDto) {
    const updateStadium= await this.stadiumRepo.update(UpdateAdminDto,{where:{id},returning:true});
    return updateStadium[1][0].dataValues;
  }

  async remove(id: number) {
    return await this.stadiumRepo.destroy({where:{id}});
  }
}
