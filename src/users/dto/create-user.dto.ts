import { IsBoolean, IsEnum, IsNotEmpty, IsNumber, IsString, Max, MaxLength, Min, MinLength } from "class-validator";
import { USER_ROLE } from "../types/user-role.enum";

export class CreateUserDto {
  @MinLength(3)
  @MaxLength(50)
  @IsString()
  @IsNotEmpty()
  public name: string;

  @IsNotEmpty()
  @IsNumber()
  @Max(200)
  @Min(0)
  public age: number;

  @IsNotEmpty()
  @IsEnum(USER_ROLE)
  public role: USER_ROLE;

  @IsBoolean()
  public active: boolean;
}
