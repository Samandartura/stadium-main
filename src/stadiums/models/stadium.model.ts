import { ApiProperty } from "@nestjs/swagger";
import { Column, DataType, Model, Table } from "sequelize-typescript";



interface StadiumAtts{
  category_id:number;
  owner_id:number;
  cantact_with:string;
  name:string;
  volume:string;
  address:string;
  region_id:number;
  district_id:number;
  location:string;
  buildAt:Date;
  start_time:Date;
  end_time:Date;

}
@Table({tableName:'stadium'})
export class Stadium extends Model<Stadium, StadiumAtts>{

  @ApiProperty({example:"",description:""})
  @Column({
    type:DataType.INTEGER,
    autoIncrement:true,
    primaryKey:true
  })
  id:number;


  @ApiProperty({example:"",description:""})
  @Column({
    type:DataType.INTEGER,
    allowNull:false
  })
  category_id:number;

  @ApiProperty({example:"",description:""})
  @Column({
    type:DataType.INTEGER,
    allowNull:false
  })
  owner_id:number;

  @ApiProperty({example:"",description:""})
  @Column({
    type:DataType.STRING,
    allowNull:false
  })
  cantact_with:string;

  @ApiProperty({example:"",description:""})
  @Column({
    type:DataType.STRING,
    allowNull:false
  })
  name:string;

  @ApiProperty({example:"",description:""})
  @Column({
    type:DataType.STRING,
  })
  volume:string;

  @ApiProperty({example:"",description:""})
  @Column({
    type:DataType.STRING,
    allowNull:false
  })
  address:string;

  @ApiProperty({example:"",description:""})
  @Column({
    type:DataType.INTEGER,
    allowNull:false
  })
  region_id:number;

  @ApiProperty({example:"",description:""})
  @Column({
    type:DataType.INTEGER,
    allowNull:false
  })
  district_id:number;

  @ApiProperty({example:"",description:""})
  @Column({
    type:DataType.STRING,
    allowNull:false
  })
  location:string;

  @ApiProperty({example:"",description:""})
  @Column({
    type:DataType.DATE,
    allowNull:false
  })
  buildAt:Date;

  @ApiProperty({example:"",description:""})
  @Column({
    type:DataType.TIME,
    allowNull:false
  })
  start_time:Date;

  @ApiProperty({example:"",description:""})
  @Column({
    type:DataType.INTEGER,
    allowNull:false
  })
  end_time:Date;
}
