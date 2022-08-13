import { UpdateUserDto } from './dto/update-user.dto';
import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
import { User } from './user.entity';
import { GetUserFilterDto } from './dto/get-user-filter.dto';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) { }

  @Get()
  public getAllUsers(@Query() filter: GetUserFilterDto): Promise<User[]> {
    return this.usersService.getAllUsers(filter);
  }

  @Get('/:id')
  public getUserById(@Param('id') id: string) {
    return this.usersService.getUserById(id);
  }

  @Delete('/:id')
  public deleteUserById(@Param('id') id: string) {
    return this.usersService.deleteUserById(id);
  }

  @Post()
  public createUser(@Body() body: CreateUserDto): Promise<User> {
    return this.usersService.createUser(body);
  }

  @Put('/:id')
  public updateUser(@Param('id') id: string, @Body() body: UpdateUserDto) {
    return this.usersService.putUserById(id, body);
  }
}
