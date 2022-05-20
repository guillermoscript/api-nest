import { ApiProperty } from "@nestjs/swagger";
import { Countries } from "@prisma/client";

export class Country implements Countries{
    @ApiProperty()
    id: number;
    @ApiProperty()
    continentId: number;
    @ApiProperty()
    countryName: string;
    createdAt: Date;
    createdBy: string;
    updatedAt: Date;
    updatedBy: string;
    softDeletedAt: Date;
    softDeletedBy: string;
}
