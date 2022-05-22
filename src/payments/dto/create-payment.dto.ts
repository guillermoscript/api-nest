import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsNotEmpty, IsNumber } from "class-validator";

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
    @IsDate()
    paymentDate: Date;

    @ApiProperty()
    @IsDate()
    comissionDate: Date;
}
