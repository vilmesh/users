import { GetUserFilterDto } from './dto/get-user-filter.dto';
import { UsersRepository } from './users.repository';
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './user.entity';
import { userInfo } from 'os';

@Injectable()
export class UsersService {
  constructor(private usersRepository: UsersRepository) { }

  public getAllUsers(filter: GetUserFilterDto): Promise<User[]> {
    return this.usersRepository.getAllUsers(filter);
  }

  public async getUserById(id: string): Promise<User> {
    const user = await this.usersRepository.getUserById(id);
    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    return user;
  }

  public async deleteUserById(id: string): Promise<void> {
    const user = await this.usersRepository.delete(id);
    if (user.affected === 0) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
  }

  public createUser(user: CreateUserDto) {
    return this.usersRepository.createUser(user);
  }

  public async putUserById(id: string, body: UpdateUserDto) {
    const user = await this.getUserById(id);
    return this.usersRepository.save({ ...user, ...body });
  }
}
