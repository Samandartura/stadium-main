import { Injectable } from '@nestjs/common';
import { CreateUserCardDto } from './dto/create-user-card.dto';
import { UpdateUserCardDto } from './dto/update-user-card.dto';
import { InjectModel } from '@nestjs/sequelize';
import { UserCard } from './models/user-card.model';

@Injectable()
export class UserCardsService {
  constructor(@InjectModel(UserCard) private userCardRepo: typeof UserCard){}
  async create(createUserCardDto: CreateUserCardDto) {
    return await this.userCardRepo.create(createUserCardDto);
  }

  async findAll() {
    return await this.userCardRepo.findAll();
  }

  async findOne(id: number) {
    return await this.userCardRepo.findOne({where:{id}});
  }

  async update(id: number, updateUserCardDto: UpdateUserCardDto) {
    const usercard1 = await this.userCardRepo.update(updateUserCardDto,{where:{id},returning:true});
    return usercard1[1][0].dataValues;
  }

  async remove(id: number) {
    return await this.userCardRepo.destroy({where:{id}});
  }
}
