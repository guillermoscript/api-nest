import { ApiProperty } from "@nestjs/swagger";
import { Companies } from "@prisma/client";

export class Company implements Companies {
    @ApiProperty()
    id: number;
    @ApiProperty()
    document: number;
    @ApiProperty()
    socialReason: string;
    @ApiProperty()
    economicActivity: string;
    @ApiProperty()
    webPage: string;
    
                
    }
