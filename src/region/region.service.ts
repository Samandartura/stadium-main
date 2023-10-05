import { Injectable } from '@nestjs/common';
import { CreateRegionDto } from './dto/create-region.dto';
import { UpdateRegionDto } from './dto/update-region.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Region } from './models/region.model';

@Injectable()
export class RegionService {
  constructor(@InjectModel(Region) private regionRepo:typeof Region){}
  async create(createRegionDto: CreateRegionDto) {
    return await this.regionRepo.create(createRegionDto);
  }

  async findAll() {
    return await this.regionRepo.findAll();
  }

  async findOne(id: number) {
    return await this.regionRepo.findOne({where:{id}});
  }

  async update(id: number, updateRegionDto: UpdateRegionDto) {
    const updateRegion = await this.regionRepo.update(updateRegionDto,{where:{id},returning:true}) ;
    return updateRegion[1][0].dataValues
  }

  async remove(id: number) {
    return await this.regionRepo.destroy({where:{id}});
  }
}
