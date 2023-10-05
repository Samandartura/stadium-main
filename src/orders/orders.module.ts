import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Region } from 'src/region/models/region.model';

@Module({
  imports:[SequelizeModule.forFeature([Region])],
  controllers: [OrdersController],
  providers: [OrdersService],
})
export class OrdersModule {}
