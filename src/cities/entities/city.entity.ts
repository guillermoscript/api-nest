import { ApiProperty } from "@nestjs/swagger";
import { Cities } from "@prisma/client";

export class City implements Cities {
    @ApiProperty()
    id: number;
    @ApiProperty()
    name: string;
    @ApiProperty()
    countryStateId: number;
    createdAt: Date;
    createdBy: string;
    updatedAt: Date;
    updatedBy: string;
    softDeletedAt: Date;
    softDeletedBy: string;
}
