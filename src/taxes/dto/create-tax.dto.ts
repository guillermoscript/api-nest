import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class CreateTaxDto {
  @ApiProperty()
  @IsNumber()
  OrderDetailsId: number;

  @ApiProperty()
  @IsString()
  metakey: string;

  @ApiProperty()
  @IsString()
  metavalue: string;
}
