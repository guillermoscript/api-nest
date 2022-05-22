import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsNumber, IsPhoneNumber, IsString } from 'class-validator';
import { Gender } from '../entities/person.entity';

export class CreatePersonDto {
  @ApiProperty()
  @IsNumber()
  document?: number;

  @ApiProperty()
  //   @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty()
  //   @IsNotEmpty()
  @IsString()
  lastName: string;

  @ApiProperty()
  //   @IsNotEmpty()
  @IsString()
  email: string;

  @ApiProperty()
  gender?: Gender;

  @ApiProperty()
  // @IsNotEmpty()
  // @IsString()
  @IsPhoneNumber('VE')
  phone?: string;

  @ApiProperty()
  //   @IsNotEmpty()
  @IsString()
  @IsDate()
  birthDate?: Date;
}
