import { ApiProperty } from "@nestjs/swagger";
import { Periodicities } from "@prisma/client";

export class Periodicity implements Periodicities {
    @ApiProperty()
    id: number;
    @ApiProperty()
    name: string;
    createdAt: Date;
    createdBy: string;
    updatedAt: Date;
    updatedBy: string;
    softDeletedAt: Date;
    softDeletedBy: string;
}
