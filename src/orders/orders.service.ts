import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Order } from './models/order.model';
import { Region } from 'src/region/models/region.model';

@Injectable()
export class OrdersService {
  constructor(@InjectModel(Order) private orderRepo:typeof Region){}
  async create(createOrderDto: CreateOrderDto) {
    return await this.orderRepo.create(createOrderDto);
  }

  async findAll() {
    return await this.orderRepo.findAll();
  }

  async findOne(id: number) {
    return await this.orderRepo.findOne({where:{id}});
  }

  async update(id: number, updateOrderDto: UpdateOrderDto) {
    const updateOrder = await this.orderRepo.update(updateOrderDto,{where:{id},returning:true});
    return updateOrder[1][0].dataValues
  }

  async remove(id: number) {
    return await this.orderRepo.destroy({where:{id}});
  }
}
