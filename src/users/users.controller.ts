import { Controller, Get, Post, Body, Patch, Param, Delete, Res, HttpStatus, HttpCode, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { User } from './models/user.model';
import { Response} from 'express'
import { CookieGetter } from '../decorators/cookieGetter.decorators';
import { FindUserDto } from './dto/find-user.dto';
import { UserGuard } from '../guards/user.guard';


@ApiTags("Users")
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @ApiOperation({summary:"register user"})
  @ApiResponse({status:201,type:User})
  @Post("signup") 
  registration(
    @Body() createUserDto:CreateUserDto,
    @Res({passthrough:true}) res:Response
  ){
    return this.usersService.registration(createUserDto, res)
  }


  //  LOGOUT
  @ApiOperation({ summary: 'logout User' })
  @ApiResponse({ status: 200, type: User })
  @UseGuards(UserGuard)
  @HttpCode(HttpStatus.OK)
  @Post('signout')
  logout(
    @CookieGetter('refresh_token') refreshToken: string,
    @Res({ passthrough: true }) res: Response,
  ) {
    return this.usersService.logout(refreshToken, res);
  }

    //  REFRESH
    @UseGuards(UserGuard)
    @Post(':id/refresh')
    refresh(
      @Param('id') id: string,
      @CookieGetter('refresh_token') refreshToken: string,
      @Res({ passthrough: true }) res: Response,
    ) {
      const result= this.usersService.refreshToken(+id, refreshToken, res);
      console.log(result);
      
    }

  @Post('find')
  finAll(@Body() findUserDto: FindUserDto) {
    return this.usersService.findAll(findUserDto);
  }
 

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

}
