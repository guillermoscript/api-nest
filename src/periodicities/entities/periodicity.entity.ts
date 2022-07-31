import { ApiProperty } from "@nestjs/swagger";
import { Periodicities } from "@prisma/client";

export class Periodicity implements Periodicities {
    @ApiProperty()
    id: number;
    @ApiProperty()
    name: string;
    
                
    }
