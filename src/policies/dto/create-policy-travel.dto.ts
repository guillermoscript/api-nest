import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsDate, IsNotEmpty, IsNumber } from 'class-validator';
import { CreatePolicyClientDto } from './create-policy-client.dto';

export class CreatePolicyTravelDto extends CreatePolicyClientDto {
  // travel dto

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  startCountry?: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  endCountry?: number;

  @ApiProperty()
  @IsDate()
  @Type(() => Date)
  startDate?: Date;

  @ApiProperty()
  @IsDate()
  @Type(() => Date)
  endDate?: Date;
}
