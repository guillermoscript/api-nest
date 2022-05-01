import {
  IsDate,
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsPhoneNumber,
  IsString,
} from 'class-validator';

export class ClientDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  @IsString()
  gender: string;

  @IsNotEmpty()
  @IsNumber()
  documentTypeId: number;

  @IsNotEmpty()
  @IsNumber()
  document: number;

  // @IsNotEmpty()
  // @IsDate()
  birthDate: Date;

  @IsString()
  name: string;

  @IsString()
  civilPolicyStatus: string;

  @IsString()
  company: string;

  @IsString()
  ocupation: string;

  @IsPhoneNumber()
  phone: string;
}
