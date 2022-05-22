import { ApiProperty } from "@nestjs/swagger";
import { Patrimonials } from "@prisma/client";

export class Patrimonial implements Patrimonials {
    @ApiProperty()
    id: number;
    @ApiProperty()
    policyId: number;
    @ApiProperty()
    type: string;
    @ApiProperty()
    totalValue: number;
    @ApiProperty()
    machineryValue: number;
    @ApiProperty()
    furnitureValue: number;
    createdAt: Date;
    createdBy: string;
    updatedAt: Date;
    updatedBy: string;
    softDeletedAt: Date;
    softDeletedBy: string;
}
