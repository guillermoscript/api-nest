import { ApiProperty } from "@nestjs/swagger";
import { OrderDetails } from "@prisma/client";

export class OrderDetail implements OrderDetails{
    @ApiProperty()
    id: number;
    @ApiProperty()
    ClientHasTomadorId: number;
    @ApiProperty()
    periodicityId: number;
    @ApiProperty()
    primeValue: number;
    @ApiProperty()
    taxes: number;
    @ApiProperty()
    AnnexValue: number;
    @ApiProperty()
    comission: number;
    @ApiProperty()
    comissionPolicyStatus: boolean;
    @ApiProperty()
    ValorFinalizacion: number;
    @ApiProperty()
    Total: number;
    createdAt: Date;
    createdBy: string;
    updatedAt: Date;
    updatedBy: string;
    softDeletedAt: Date;
    softDeletedBy: string;
}
