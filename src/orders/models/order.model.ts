import { ApiProperty } from "@nestjs/swagger";
import { Column, DataType, Model } from "sequelize-typescript";

interface orderAtts{
  user_id:number;
  user_wallet_id:number;
  st_times_id:number;
  date:Date;
  createdAt:Date;
  status_id:number;
}
export class Order extends Model<Order,orderAtts> {

  @ApiProperty({example:'',description:''})
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

  @ApiProperty({example:'',description:""})
  @Column({
    type:DataType.DATE,
    allowNull:false
  })
  createdAt:Date;

  @ApiProperty({example:'',description:""})
  @Column({
    type:DataType.INTEGER,
    allowNull:false
  })
  status_id:number;
}
