import { Module } from '@nestjs/common';
import { UserCardsService } from './user-cards.service';
import { UserCardsController } from './user-cards.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { UserCard } from './models/user-card.model';

@Module({
  imports:[SequelizeModule.forFeature([UserCard])],
  controllers: [UserCardsController],
  providers: [UserCardsService],
})
export class UserCardsModule {}
