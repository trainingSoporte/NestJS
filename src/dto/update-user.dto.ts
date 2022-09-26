import { IsEmail, IsNumber, IsOptional, IsString, MinLength } from "class-validator";

export class UpdateUserDto {

  @IsNumber()
  @IsOptional()
  readonly id?:number;
  
  @IsString()  
  @IsOptional()
  readonly username?: string;
  
  @IsString()
  @IsOptional()
  readonly fullname?: string;
  
  @IsEmail()
  @IsOptional()
  readonly email?: string;
  
  @IsString()
  @MinLength(8)
  @IsOptional()
  readonly password?: string;
}

