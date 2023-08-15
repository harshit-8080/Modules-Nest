import { Type } from 'class-transformer';
import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  isNumber,
} from 'class-validator';

export class CreateAdminDTO {
  name: string;
  email: string;
  password: string;
  contact: string;
  exp?: number;
}

export class CreateEmployeeDTO {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsString()
  @IsNotEmpty()
  contact: string;

  @IsNumber()
  @IsOptional()
  exp: number;
}

export class SearchDataDTO {
  @IsString()
  @IsNotEmpty()
  firstName: string;

  @IsNotEmpty()
  @IsString()
  lastName: string;

  @IsNumber()
  @IsNotEmpty()
  @Type(() => Number)
  age: number;
}
