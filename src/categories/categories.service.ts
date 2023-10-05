import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Category } from './models/category.model';

@Injectable()
export class CategoriesService {
  constructor(@InjectModel(Category) private categoryRepo:typeof Category ){}
  async create(createCategoryDto: CreateCategoryDto) {
    return await this.categoryRepo.create(createCategoryDto);
  }

  async findAll() {
    return await this.categoryRepo.findAll();
  }

  async findOne(id: number) {
    return await this.categoryRepo.findOne({where:{id}});
  }

  async update(id: number, updateCategoryDto: UpdateCategoryDto) {
    const updateCategory = await this.categoryRepo.update(updateCategoryDto,{where:{id},returning:true});
    return updateCategory[1][0].dataValues;
  }

  async remove(id: number) {
    return await this.categoryRepo.destroy({where:{id}});
  }
}
