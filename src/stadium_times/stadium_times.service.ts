import { Injectable } from '@nestjs/common';
import { CreateStadiumTimeDto } from './dto/create-stadium_time.dto';
import { UpdateStadiumTimeDto } from './dto/update-stadium_time.dto';
import { InjectModel } from '@nestjs/sequelize';
import { StadiumTime } from './model/stadium_time.model';

@Injectable()
export class StadiumTimesService {
  constructor(@InjectModel(StadiumTime) private S_timeRepo:typeof StadiumTime){}
  async create(createStadiumTimeDto: CreateStadiumTimeDto) {
    return await this.S_timeRepo.create(createStadiumTimeDto) ;
  }

  async findAll() {
    return await this.S_timeRepo.findAll() ;
  }

  async findOne(id: number) {
    return await this.S_timeRepo.findOne({where:{id}}) ;
  }

  async update(id: number, updateStadiumTimeDto: UpdateStadiumTimeDto) {
    const updateSTime= await this.S_timeRepo.update(updateStadiumTimeDto,{where:{id},returning:true}) ;
    return updateSTime[1][0].dataValues
  }

  async remove(id: number) {
    return await this.S_timeRepo.destroy({where:{id}}) ;
  }
}
