import { UpdateUserDto } from './dto/update-user.dto';
import { GetUserFilterDto } from './dto/get-user-filter.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UsersRepository {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) { }

  public async createUser(userInfo: CreateUserDto): Promise<User> {
    const user = this.usersRepository.create(userInfo);
    await this.usersRepository.save(user);
    return user;
  }

  public async getUserById(id: string): Promise<User> {
    const user = this.usersRepository.findOneBy({ id });
    return user;
  }

  public async delete(id: string): Promise<DeleteResult> {
    return this.usersRepository.delete(id);
  }

  public async save(userInfo: UpdateUserDto): Promise<User> {
    return this.usersRepository.save(userInfo);
  }

  public async getAllUsers(filter: GetUserFilterDto): Promise<User[]> {
    const { name, search } = filter;
    const query = this.usersRepository.createQueryBuilder('user');

    if (name) {
      query.andWhere('user.name = :name', { name });
    }

    if (search) {
      query.andWhere('LOWER(user.name) LIKE LOWER(:search)', {
        search: `%${search}%`,
      });
    }

    return query.getMany();
  }
}
