import { ApiProperty } from "@nestjs/swagger";
import { Addresses } from "@prisma/client";

export class Address implements Addresses{
    @ApiProperty()
    id: number;
    @ApiProperty()
    cityId: number;
    @ApiProperty()
    street: string;
    @ApiProperty()
    residence: string;
    @ApiProperty()
    GPS: string;
    createdAt: Date;
    createdBy: string;
    updatedAt: Date;
    updatedBy: string;
    softDeletedAt: Date;
    softDeletedBy: string;
}
