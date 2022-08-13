import { Injectable } from '@nestjs/common';
import { v4 } from 'uuid';
import { User, USER_ROLE } from './users.model';

@Injectable()
export class UsersService {
  private users: User[] = [
    {
      id: v4(),
      name: 'Vic',
      age: 30,
      role: USER_ROLE.TEACHER,
      active: true,
    },
    {
      id: v4(),
      name: 'Vic2',
      age: 35,
      role: USER_ROLE.STUDENT,
      active: false,
    },
    {
      id: v4(),
      name: 'Vic3',
      age: 32,
      role: USER_ROLE.TEACHER,
      active: true,
    },
  ];

  public getAllUsers() {
    return this.users;
  }

  public getUserById(id: string) {
    return this.users.find((user) => user.id === id);
  }
}
