import { ApiProperty } from "@nestjs/swagger";
import { Column, DataType, Model, Table } from "sequelize-typescript";



interface UserAttrs{
  first_name: string;
  last_name : string;
  username:string;
  hashed_password:string;
  telegram_link:string;
  email:string;
  phone:string;
  user_photo:string;
  birthday:Date;
  is_owner:boolean;
  is_active:boolean;
  hashed_refresh_token:string;

}

@Table({tableName:"users"})
export class User extends  Model<User,UserAttrs>{
  @ApiProperty({example:1, description:""})
  @Column({
    type:DataType.INTEGER,
    autoIncrement:true,
    primaryKey:true
  })
  id: number;

  @ApiProperty({example:"userni ismi",description:"Foydalanuvchi"})
  @Column({
    type:DataType.STRING,  
  })
   first_name: string;

  @ApiProperty({example:"userni familyasi",description:"Foydalanuvchi"})
  @Column({
    type:DataType.STRING, 
   
  })
  last_name : string;


  @ApiProperty({example:"userni username",description:"Foydalanuvchi"})
  @Column({
    type:DataType.STRING, 
    unique:true   
  })
  username:string;


  @ApiProperty({example:"t.me://sturayev",description:"Foydalanuvchi"})
  @Column({
    type:DataType.STRING,    
  })
  telegram_link:string;


  @ApiProperty({example:"token",description:"Foydalanuvchi"})
  @Column({
    type:DataType.STRING, 
  })
  hashed_password:string;


  @ApiProperty({example:"samandar77turayev@gmail.com",description:"Foydalanuvchi"})
  @Column({
    type:DataType.STRING, 
     unique:true
  })
  email:string;


  @ApiProperty({example:"userni telefoni",description:"Foydalanuvchi"})
  @Column({
    type:DataType.STRING,    
  })
  phone:string;


  @ApiProperty({example:"img.jpg",description:"Foydalanuvchi"})
  @Column({
    type:DataType.STRING,    
  })
  user_photo:string;


  @ApiProperty({example:"userni to'g'ilgan kuni ",description:"Foydalanuvchi"})
  @Column({
    type:DataType.DATE,    
  })
  birthday:Date;


  @ApiProperty({example:"true",description:"Foydalanuvchi"})
  @Column({
    type:DataType.BOOLEAN,  
    defaultValue:false  
  })
  is_owner:boolean;


  @ApiProperty({example:"true",description:"Foydalanuvchi"})
  @Column({
    type:DataType.BOOLEAN,  
    defaultValue:false  
  })
  is_active:boolean;


  @ApiProperty({example:"token",description:"Foydalanuvchi"})
  @Column({
    type:DataType.STRING,
  })
  hashed_refresh_token:string;


  @Column({
    type:DataType.STRING
  })
  activation_link: string;

}