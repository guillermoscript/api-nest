import { ApiProperty } from '@nestjs/swagger';
import { CreatePersonDto } from 'src/person/dto/create-person.dto';

import { IsNumber, IsString } from 'class-validator';
export class CreateClientDto extends CreatePersonDto {
  @ApiProperty()
  @IsString()
  civilPolicyStatus?: string;

  @ApiProperty()
  @IsString()
  company?: string;

  @ApiProperty()
  @IsString()
  gender: string;

  @ApiProperty()
  @IsString()
  ocupation?: string;

  // address dto

  @ApiProperty()
  @IsNumber()
  cityId: number;

  @ApiProperty()
  // @IsString()
  street?: string;

  @ApiProperty()
  // @IsString()
  residence?: string;

  @ApiProperty()
  // @IsString()
  GPS?: string;
}
