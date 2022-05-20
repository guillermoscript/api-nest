import { ApiProperty } from '@nestjs/swagger';
import {
  IsDate,
  IsNumber
} from 'class-validator';


export class CreatePeriodDto {
  @ApiProperty()
  @IsDate()
  startDate: Date;

  @ApiProperty()
  @IsDate()
  endDate: Date;
  
  @ApiProperty()
  @IsNumber()
  renewal: number;
}
