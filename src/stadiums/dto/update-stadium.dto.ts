import { PartialType } from '@nestjs/mapped-types';
import { CreateStadiumDto } from './create-stadium.dto';

export class UpdateStadiumDto extends PartialType(CreateStadiumDto) {
  category_id?:number;
  owner_id?:number;
  cantact_with?:string;
  name?:string;
  volume?:string;
  address?:string;
  region_id?:number;
  district_id?:number;
  location?:string;
  buildAt?:Date;
  start_time?:Date;
  end_time?:Date;
}
