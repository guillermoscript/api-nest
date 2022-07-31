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

export class CreatePolicyVehicleDto extends CreatePolicyClientDto{
  // // vehicle dto

  @ApiProperty()
  @IsString()
  brand?: string;

  @ApiProperty()
  @IsString()
  class?: string;

  @ApiProperty()
  @IsString()
  model?: string;

  @ApiProperty()
  @IsString()
  vehicleType?: string;

  // @ApiProperty()
  // @IsString()
  // serviceType?: string;

  // @ApiProperty()
  // @IsString()
  // gasConverted?: boolean;

  @ApiProperty()
  @IsNumber()
  vehicleAge?: number;
}
