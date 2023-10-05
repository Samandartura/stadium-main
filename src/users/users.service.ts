import { BadRequestException, ForbiddenException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './models/user.model';
import { JwtService } from '@nestjs/jwt';
import { v4 } from 'uuid';
import * as bcrypt from 'bcrypt'
import { Response} from 'express'
import { FindUserDto } from './dto/find-user.dto';
import { Op } from 'sequelize';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User) private readonly userRepo:typeof User,
  private readonly jwtService:JwtService){}

  //token
  async getTokens(user:User){
    const jwtPayload = {
      id:user.id,
      is_active:user.is_active,
      is_owner:user.is_owner
    };
    const [accessToken, refreshToken] = await Promise.all([
      this.jwtService.signAsync(jwtPayload,{
        secret:process.env.ACCESS_TOKEN_KEY,
        expiresIn:process.env.ACCESS_TOKEN_TIME,
      }),
      this.jwtService.signAsync(jwtPayload,{
        secret:process.env.REFRESH_TOKEN_KEY,
        expiresIn:process.env.REFRESH_TOKEN_TIME
      }),
    ]);
    return {
      access_token:accessToken,
      refresh_token:refreshToken,
    }
  };

  // registration
  async registration(createUserDto:CreateUserDto,res:Response){
    const user = await this.userRepo.findOne({
      where:{username: createUserDto.username},
    });
    if(user){
      throw new BadRequestException("User already exists!")
    }
    if(createUserDto.password !== createUserDto.confirm_password){
      throw new BadRequestException("Password is not match")
    }

    const hashed_password = await bcrypt.hash(createUserDto.password, 7);
    const newUser = await this.userRepo.create({
      ...createUserDto,
      hashed_password:hashed_password,
    });
    const tokens = await this.getTokens(newUser);

    const hashed_refresh_token = await bcrypt.hash(tokens.refresh_token,7);
    const uniqueKey: string = v4();
    const updateUser = await this.userRepo.update(
      {
        hashed_refresh_token:hashed_refresh_token,
        activation_link:uniqueKey,
      },
      {where:{id:newUser.id},returning:true},
    );
    res.cookie("refresh_token",tokens.refresh_token,{
      maxAge: 15*24*60*60*1000,
      httpOnly:true
    });
    
    const response = {
      message: "User registireted",
      user:updateUser[1][0],
      tokens,
    };
    return response;
    
  }

  async logout(refreshToken: string, res: Response) {
    const userData = await this.jwtService.verify(refreshToken, {
      secret: process.env.REFRESH_TOKEN_KEY,
    });
    if (!userData) {
      throw new BadRequestException('usernpt foud');
    }
    const updatedUser = await this.userRepo.update(
      { hashed_refresh_token: null },
      { where: { id: userData.id }, returning: true },
    );

    res.clearCookie('refresh_token');
    const response = {
      message: 'User logged out successfully',
      user: updatedUser[1][0],
    };

    return response;
  }


  async refreshToken(user_id: number, refreshToken: string, res: Response) {
    const decodedToken = this.jwtService.decode(refreshToken);
    if (user_id != decodedToken['id']) {
      throw new BadRequestException('user not foud');
    }
    const user = await this.userRepo.findOne({ where: { id: user_id } });
    if (!user || !user.hashed_refresh_token) {
      throw new BadRequestException('usernpt foud');
    }

    const tokenMatch = await bcrypt.compare(
      refreshToken,
      user.hashed_refresh_token,
    );
    if (!tokenMatch) {
      throw new ForbiddenException('forbidden');
    }
    const tokens = await this.getTokens(user);
    const hashed_password_token = await bcrypt.hash(tokens.refresh_token, 7);

    const updatedUser = await this.userRepo.update(
      { hashed_refresh_token: hashed_password_token },
      { where: { id: user.id }, returning: true },
    );

    res.cookie('refreshToken', tokens.refresh_token, {
      maxAge: 15 * 24 * 60 * 60 * 1000,
      httpOnly: true,
    });

    const response = {
      message: 'User refreshed',
      user: updatedUser[1][0],
      tokens,
    };

    return response;
  }


  async findAll(findUserDto: FindUserDto) {
    const where = {};
    if (findUserDto.first_name) {
      where['first_name'] = {
        [Op.like]: `%${findUserDto.first_name}%`,
      };
    }
    if (findUserDto.last_name) {
      where['last_name'] = {
        [Op.like]: `%${findUserDto.last_name}%`,
      };
    }
    if (findUserDto.username) {
      where['username'] = {
        [Op.like]: `%${findUserDto.username}%`,
      };
    }

    if (findUserDto.email) {
      where['email'] = {
        [Op.like]: `%${findUserDto.email}%`,
      };
    }

    if (findUserDto.birthday_begin) {
      where[Op.and] = {
        birthday: {
          [Op.between]: [findUserDto.birthday_begin, findUserDto.birthday_end],
        },
      };
    } else if (findUserDto.birthday_begin) {
      where['birthday_begin'] = { [Op.gte]: findUserDto.birthday_begin };
    } else if (findUserDto.birthday_end) {
      where['birthday_end'] = { [Op.lte]: findUserDto.birthday_end };
    }

    const users = await User.findAll({ where });
    if (!User) {
      throw new BadRequestException('user not fo');
    }
    return users;
  }


  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

 
}
