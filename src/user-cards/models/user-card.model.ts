import { ApiProperty } from "@nestjs/swagger";
import { Column, DataType, Model, Table } from "sequelize-typescript";


interface UserCardAtts{
  user_id:number;
  name: string;
  phone: string;
  number: number;
  year:string;
  month:string;
  is_active:boolean;
  is_main: boolean;
  
}

@Table({tableName:'usercard'})
export class UserCard extends Model<UserCard,UserCardAtts>{

@ApiProperty({example:1,description:'unical id'})
@Column({
  type: DataType.INTEGER,
  autoIncrement:true,
  primaryKey:true
})
id:number

@ApiProperty({example:1,description:'unical id'})
@Column({
  type: DataType.INTEGER,
  allowNull: false,
})
user_id:number;

@ApiProperty({example:1,description:'unical id'})
@Column({
  type: DataType.STRING,
  allowNull: false,
})
name: string;

@ApiProperty({example:1,description:'unical id'})
@Column({
  type: DataType.STRING,
  allowNull: false,
})
phone: string;

@ApiProperty({example:1,description:'unical id'})
@Column({
  type: DataType.BIGINT,
  allowNull: false,
})
number: number;

@ApiProperty({example:1,description:'unical id'})
@Column({
  type: DataType.STRING,
  allowNull: false,
})
year:string;

@ApiProperty({example:1,description:'unical id'})
@Column({
  type: DataType.STRING,
  allowNull: false,
})
month:string;

@ApiProperty({example:1,description:'unical id'})
@Column({
  type: DataType.BOOLEAN,
  defaultValue:false
})
is_active:boolean;

@ApiProperty({example:1,description:'unical id'})
@Column({
  type: DataType.BOOLEAN,
  defaultValue:false
})
is_main: boolean;
}
