import { ApiProperty } from "@nestjs/swagger";
import { CountryStates } from "@prisma/client";

export class CountryState implements CountryStates {
    @ApiProperty()
    id: number;
    @ApiProperty()
    name: string;
    @ApiProperty()
    countryId: number;
    
                
    }
