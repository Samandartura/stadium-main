import { PartialType } from '@nestjs/mapped-types';
import { CreateUserCardDto } from './create-user-card.dto';

export class UpdateUserCardDto extends PartialType(CreateUserCardDto) {

  user_id?:number;
  name?: string;
  phone?: string;
  number?: number;
  year?:string;
  month?:string;
  is_active?:boolean;
  is_main?: boolean;
}
