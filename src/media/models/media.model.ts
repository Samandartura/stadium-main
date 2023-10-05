import { ApiProperty } from "@nestjs/swagger";
import { Column, DataType, Model } from "sequelize-typescript";

interface mediaAtts{
  stadium_id:number;
  photo:string;
  description:string;
}
export class Media extends Model<Media,mediaAtts> {

  @ApiProperty({example:'',description:""})
  @Column({
    type:DataType.INTEGER,
    autoIncrement:true,
    primaryKey:true,
  })
  id:number;

  @ApiProperty({example:'',description:""})
  @Column({
    type:DataType.INTEGER,
    allowNull:false
  })
  stadium_id:number;

  @ApiProperty({example:'',description:""})
  @Column({
    type:DataType.STRING,
    allowNull:false
  })
  photo:string;

  @ApiProperty({example:'',description:""})
  @Column({
    type:DataType.STRING,
    allowNull:false
  })
  description:string;
}
