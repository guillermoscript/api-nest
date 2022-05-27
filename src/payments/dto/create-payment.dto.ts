import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsDate, IsNotEmpty, IsNumber } from 'class-validator';

export class CreatePaymentDto {
  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  orderDetailsId: number;

  @ApiProperty()
  @IsNumber()
  receiptNumber: number;

  @ApiProperty()
  @IsNumber()
  paymentValue: number;

  @ApiProperty()
  @Type(() => Date)
  @IsDate()
  paymentDate: Date;

  @ApiProperty()
  @Type(() => Date)
  @IsDate()
  comissionDate: Date;
}
