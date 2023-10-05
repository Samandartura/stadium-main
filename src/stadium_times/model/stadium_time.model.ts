import { Injectable } from "@nestjs/common";
import { ApiProperty } from "@nestjs/swagger";
import { Column, DataType, Model, PrimaryKey } from "sequelize-typescript";


interface s_timesAtts{
  stadium_id:number;
  satart_time:Date;
  end_time:Date;
  price:number;
}
export class StadiumTime extends Model<StadiumTime,s_timesAtts> {

  @ApiProperty({example:'',description:""})
  @Column({
    type:DataType.INTEGER,
    primaryKey:true,
    autoIncrement:true
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
    type:DataType.DATE,
    allowNull:false
  })
  satart_time:Date;

  @ApiProperty({example:'',description:""})
  @Column({
    type:DataType.DATE,
    allowNull:false
  })
  end_time:Date;

  @ApiProperty({example:'',description:""})
  @Column({
    type:DataType.INTEGER,
    allowNull:false
  })
  price:number;
}
