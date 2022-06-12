import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class CreateCurrencyDto {
  @ApiProperty()
  @IsNumber()
  id: number;
  @ApiProperty()
  @IsString()
  name: string;
  @ApiProperty()
  @IsString()
  symbol: string;
}
