import { IsEmail, IsString, MinLength } from "class-validator";

export class CreateUserDto {

  @IsString()  
  readonly username: string;

  @IsString()
  readonly fullname: string;

  @IsEmail()
  readonly email: string;

  @IsString()
  @MinLength(8)
  readonly password: string;
}

