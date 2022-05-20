import { ApiProperty } from "@nestjs/swagger";
import { DocumentTypes } from "@prisma/client";

export class DocumentType  implements DocumentTypes{
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
