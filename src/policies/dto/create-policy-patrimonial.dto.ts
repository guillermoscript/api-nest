import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsBoolean,
  IsDate,
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator';
import { CreatePolicyClientDto } from './create-policy-client.dto';

export class CreatePolicyPatrimonialDto extends CreatePolicyClientDto{
  // // patrimonials dto

  @ApiProperty()
  @IsString()
  type?: string;

  @ApiProperty()
  @IsNumber()
  totalValue?: number;

  @ApiProperty()
  @IsNumber()
  machineryValue?: number;

  @ApiProperty()
  @IsNumber()
  furnitureValue?: number;
}
