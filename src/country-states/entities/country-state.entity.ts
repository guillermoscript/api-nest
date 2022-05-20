import { ApiProperty } from "@nestjs/swagger";
import { CountryStates } from "@prisma/client";

export class CountryState implements CountryStates {
    @ApiProperty()
    id: number;
    @ApiProperty()
    name: string;
    @ApiProperty()
    countryId: number;
    createdAt: Date;
    createdBy: string;
    updatedAt: Date;
    updatedBy: string;
    softDeletedAt: Date;
    softDeletedBy: string;
}
