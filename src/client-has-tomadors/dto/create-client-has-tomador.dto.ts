import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateClientHasTomadorDto {
  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  clientPolizaId: number;
}
