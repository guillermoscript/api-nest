import { ApiProperty } from "@nestjs/swagger";
import { Agencies } from "@prisma/client";

export class Agency implements Agencies {
    @ApiProperty()
    id: number;
    @ApiProperty()
    document: number;
    @ApiProperty()
    name: string;
    @ApiProperty()
    phone: string;
    @ApiProperty()
    email: string;
    createdAt: Date;
    createdBy: string;
    updatedAt: Date;
    updatedBy: string;
    softDeletedBy: string;
    softDeletedAt: Date;

}
