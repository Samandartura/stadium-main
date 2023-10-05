import { Module } from '@nestjs/common';
import { ComfordStadiumService } from './comford_stadium.service';
import { ComfordStadiumController } from './comford_stadium.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { ComfordStadium } from './models/comford_stadium.model';

@Module({
  imports:[SequelizeModule.forFeature([ComfordStadium])],
  controllers: [ComfordStadiumController],
  providers: [ComfordStadiumService],
})
export class ComfordStadiumModule {}
