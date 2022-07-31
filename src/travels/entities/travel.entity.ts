import { ApiProperty } from "@nestjs/swagger";
import { Travels } from "@prisma/client";

export class Travel implements Travels {
    @ApiProperty()
    id: number;
    @ApiProperty()
    startCountry: number;
    @ApiProperty()
    endCountry: number;
    @ApiProperty()
    policyId: number;
    @ApiProperty()
    startDate: Date;
    @ApiProperty()
    endDate: Date;
    
                
    }
