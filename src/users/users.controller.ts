import { Controller, Get, Param } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) { }

  @Get()
  public getAllUsers() {
    return this.usersService.getAllUsers();
  }

  @Get('/:id')
  public getUserById(@Param('id') id: string) {
    return this.usersService.getUserById(id);
  }
}
