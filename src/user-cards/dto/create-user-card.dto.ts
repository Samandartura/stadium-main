import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsDate, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateUserCardDto {

  
@ApiProperty({example:1,description:'unical id'})
@IsNotEmpty()
@IsNumber()
user_id:number;

@ApiProperty({example:1,description:'unical id'})
@IsString()
@IsNotEmpty()
name: string;

@ApiProperty({example:1,description:'unical id'})
@IsString()
@IsNotEmpty()
phone: string;

@ApiProperty({example:1,description:'unical id'})
@IsNumber()
@IsNotEmpty()
number: number;

@ApiProperty({example:1,description:'unical id'})
@IsString()
year:string;

@ApiProperty({example:1,description:'unical id'})
@IsString()
@IsNotEmpty()
month:string;

@ApiProperty({example:1,description:'unical id'})
@IsBoolean()
is_active:boolean;

@ApiProperty({example:1,description:'unical id'})
@IsBoolean()
is_main: boolean;
}
