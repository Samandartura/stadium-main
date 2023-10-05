import { ApiProperty } from "@nestjs/swagger";
import { Column, DataType, Model } from "sequelize-typescript";

interface regionAtts{
  name:string
}
export class Region extends Model<Region,regionAtts> {

  @ApiProperty({example:'',description:''})
  @Column({
    type:DataType.INTEGER,
    autoIncrement:true,
    primaryKey:true
  })
  id:number;

  @ApiProperty({example:'',description:''})
  @Column({
    type:DataType.STRING,
    allowNull:false
  })
  name:string
}
