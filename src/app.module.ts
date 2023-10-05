import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { MediaModule } from './media/media.module';
import { AdminModule } from './admin/admin.module';
import { UsersModule } from './users/users.module';
import { OrdersModule } from './orders/orders.module';
import { CartModule } from './cart/cart.module';
import { UserCardsModule } from './user-cards/user-cards.module';
import { StadiumsModule } from './stadiums/stadiums.module';
import { CategoriesModule } from './categories/categories.module';
import { StadiumTimesModule } from './stadium_times/stadium_times.module';
import { ComfordStadiumModule } from './comford_stadium/comford_stadium.module';
import { RegionModule } from './region/region.module';
import { User } from './users/models/user.model';
import { ComfortModule } from './comfort/comfort.module';
import { BotModule } from './bot/bot.module';
import { Bot } from './bot/model/bot.model';
import { TelegrafModule } from 'nestjs-telegraf';
import { BOT_NAME } from './app.constants';
import { UserCard } from './user-cards/models/user-card.model';
import { Stadium } from './stadiums/models/stadium.model';


@Module({
  imports: [
    TelegrafModule.forRootAsync({
      botName: BOT_NAME,
      useFactory: () => ({
        token: process.env.BOT_TOKEN,
        middlewares: [],
        include: [BotModule],
      }),
    }),
    ConfigModule.forRoot({
      envFilePath:".env",
      isGlobal:true,
    }),
    SequelizeModule.forRoot({
      dialect:"postgres",
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password:String(process.env.POSTGRES_PASSWORD),
      database:process.env.POSTGRES_DB,
      models:[
        User,
        // UserWallet,
        Stadium,
        UserCard,
        Bot,
      ],
      autoLoadModels:true,
      logging:false,
    }),
    MediaModule,
    AdminModule,
    UsersModule,
    OrdersModule,
    CartModule,
    UserCardsModule,
    StadiumsModule,
    CategoriesModule,
    StadiumTimesModule,
    ComfortModule,
    ComfordStadiumModule,
    RegionModule,
    BotModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
