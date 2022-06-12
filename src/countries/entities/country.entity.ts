import { ApiProperty } from "@nestjs/swagger";
import { Countries } from "@prisma/client";

export class Country implements Countries{
    @ApiProperty()
    id: number;
    @ApiProperty()
    continentId: number;
    @ApiProperty()
    countryName: string;
    
                
    }
