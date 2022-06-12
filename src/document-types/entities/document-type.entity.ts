import { ApiProperty } from "@nestjs/swagger";
import { DocumentTypes } from "@prisma/client";

export class DocumentType  implements DocumentTypes{
    @ApiProperty()
    id: number;
    @ApiProperty()
    name: string;
    
                
    }
