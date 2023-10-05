import { ApiProperty } from "@nestjs/swagger";
import { Column, DataType, Model } from "sequelize-typescript";

interface comfordSAtts{
  stadium_id:number;
  comford_id:number;
}

export class ComfordStadium extends Model<ComfordStadium,comfordSAtts> {

  @ApiProperty({example:'',description:""})
  @Column({
    type:DataType.INTEGER,
    autoIncrement:true,
    primaryKey:true
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
    type:DataType.INTEGER,
    allowNull:false
  })
  comford_id:number;
}
