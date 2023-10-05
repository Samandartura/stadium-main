import { PartialType } from '@nestjs/mapped-types';
import { CreateComfordStadiumDto } from './create-comford_stadium.dto';

export class UpdateComfordStadiumDto extends PartialType(CreateComfordStadiumDto) {
  stadium_id?:number;
  comford_id?:number;
}
