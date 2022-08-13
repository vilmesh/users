import { USER_ROLE } from "../types/user-role.enum";

export class UpdateUserDto {
  public name: string;
  public age: number;
  public role: USER_ROLE;
  public active: boolean;
}
