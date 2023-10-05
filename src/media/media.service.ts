import { Injectable } from '@nestjs/common';
import { CreateMediaDto } from './dto/create-media.dto';
import { UpdateMediaDto } from './dto/update-media.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Media } from './models/media.model';

@Injectable()
export class MediaService {
  constructor(@InjectModel(Media) private mediaRepo:typeof Media){}
  async create(createMediaDto: CreateMediaDto) {
    return await this.mediaRepo.create(createMediaDto);
  }

  async findAll() {
    return await this.mediaRepo.findAll();
  }

  async findOne(id: number) {
    return await this.mediaRepo.findOne({where:{id}});
  }

  async update(id: number, updateMediaDto: UpdateMediaDto) {
    const updateMedia = await this.mediaRepo.update(updateMediaDto,{where:{id},returning:true});
    return updateMedia[1][0].dataValues
  }

  async remove(id: number) {
    return await this.mediaRepo.destroy({where:{id}});
  }
}
