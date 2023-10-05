import { PartialType } from '@nestjs/mapped-types';
import { CreateOrderDto } from './create-order.dto';

export class UpdateOrderDto extends PartialType(CreateOrderDto) {
  user_id?:number;
  user_wallet_id?:number;
  st_times_id?:number;
  date?:Date;
  createdAt?:Date;
  status_id?:number;
}
