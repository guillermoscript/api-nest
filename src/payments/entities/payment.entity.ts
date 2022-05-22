import { ApiProperty } from "@nestjs/swagger";
import { Payments } from "@prisma/client";

export class Payment implements Payments {
    @ApiProperty()
    id: number;
    @ApiProperty()
    orderDetailsId: number;
    @ApiProperty()
    receiptNumber: number;
    @ApiProperty()
    paymentValue: number;
    @ApiProperty()
    paymentDate: Date;
    @ApiProperty()
    comissionDate: Date;
    createdAt: Date;
    createdBy: string;
    updatedAt: Date;
    updatedBy: string;
    softDeletedAt: Date;
    softDeletedBy: string;
}
