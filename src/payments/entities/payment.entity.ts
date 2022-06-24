import { ApiProperty } from "@nestjs/swagger";
import { Payments } from "@prisma/client";

export class Payment implements Payments {
    @ApiProperty()
    id: number;
    @ApiProperty()
    policyDetailsId: number;
    @ApiProperty()
    receiptNumber: number;
    @ApiProperty()
    paymentValue: number;
    @ApiProperty()
    paymentDate: Date;
    @ApiProperty()
    comissionDate: Date;
    
                
    }
