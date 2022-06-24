import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsDate, IsNumber, IsPhoneNumber, IsString } from 'class-validator';
export class CreatePersonDto {
  @ApiProperty()
  AddressId?: number;

  @ApiProperty()
  @IsNumber()
  document?: number;

  @ApiProperty()
  @IsNumber()
  documentTypeId: number;

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
  // @IsNotEmpty()
  // @IsString()
  @IsPhoneNumber('VE')
  phone?: string;

  @ApiProperty()
  gender: string;

  @ApiProperty()
  //   @IsNotEmpty()
  @Type(() => Date)
  @IsDate()
  birthDate?: Date;
}
