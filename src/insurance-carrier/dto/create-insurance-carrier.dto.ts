import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsPhoneNumber,
  IsString,
} from 'class-validator';
import { InsuranceCarrier } from '../entities/insurance-carrier.entity';

export class CreateInsuranceCarrierDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  document: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsPhoneNumber('VE')
  phone: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty()
  //   @IsNotEmpty()
  @IsString()
  account?: string;

  @ApiProperty()
  //   @IsNotEmpty()
  @IsString()
  paymentLink?: string;

  //   createdAt: Date;
  //   createdBy: string;
  //   updatedAt: Date;
  //   updatedBy: string;
  //   softDeletedAt: Date;
  //   softDeletedBy: string;
}
