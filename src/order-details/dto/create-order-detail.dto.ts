import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateOrderDetailDto {
  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  ClientHasTomadorId: number;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  periodicityId: number;

  @ApiProperty()
  @IsNumber()
  primeValue: number;

  @ApiProperty()
  @IsNumber()
  AnnexValue: number;

  @ApiProperty()
  @IsNumber()
  comission: number;

  @ApiProperty()
  @IsBoolean()
  comissionPolicyStatus: boolean;

  @ApiProperty()
  @IsNumber()
  ValorFinalizacion: number;

  @ApiProperty()
  @IsNumber()
  Total: number;
}
