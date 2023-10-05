import { ApiProperty } from "@nestjs/swagger";
import { Column, DataType, Model } from "sequelize-typescript";

interface cartAtts{
  user_id:number;
  user_wallet_id:number;
  st_times_id:number;
  date:Date;
  createdAt:Date;
  time_for_clear:Date;
  status_id:number;
}

export class Cart extends Model<Cart,cartAtts>{

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
  user_id:number;

  @ApiProperty({example:'',description:""})
  @Column({
    type:DataType.INTEGER,
    allowNull:false
  })
  user_wallet_id:number;

  @ApiProperty({example:'',description:""})
  @Column({
    type:DataType.INTEGER,
    allowNull:false
  })
  st_times_id:number;

  @ApiProperty({example:'',description:""})
  @Column({
    type:DataType.DATE,
    allowNull:false
  })
  date:Date;
  createdAt:Date;

  @ApiProperty({example:'',description:""})
  @Column({
    type:DataType.DATE,
    allowNull:false
  })
  time_for_clear:Date;

  @ApiProperty({example:'',description:""})
  @Column({
    type:DataType.INTEGER,
    allowNull:false
  })
  status_id:number;
}
