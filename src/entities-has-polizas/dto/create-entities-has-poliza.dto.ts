import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateEntitiesHasPolizaDto {
  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  policyId: number;

  @ApiProperty()
  @IsNumber()
  clientId: number;

  @ApiProperty()
  @IsNumber()
  relationId: number;
}
