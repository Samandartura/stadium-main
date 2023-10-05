import { ApiProperty } from "@nestjs/swagger";
import { Column, DataType, Model } from "sequelize-typescript";

interface categotyAtts{
  name:string;
  parent_id:number;
}

export class Category extends Model<Category,categotyAtts> {

  @ApiProperty({example:'',description:""})
  @Column({
    type:DataType.INTEGER,
    autoIncrement:true,
    primaryKey:true
  })
  id:number;

  @ApiProperty({example:'',description:""})
  @Column({
    type:DataType.STRING,
    allowNull:false
  })
  name:string;

  @ApiProperty({example:'',description:""})
  @Column({
    type:DataType.INTEGER,
    allowNull:false
  })
  parent_id:number;
}
