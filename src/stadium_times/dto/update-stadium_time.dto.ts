import { PartialType } from '@nestjs/mapped-types';
import { CreateStadiumTimeDto } from './create-stadium_time.dto';

export class UpdateStadiumTimeDto extends PartialType(CreateStadiumTimeDto) {
  stadium_id?:number;
  satart_time?:Date;
  end_time?:Date;
  price?:number;
}
