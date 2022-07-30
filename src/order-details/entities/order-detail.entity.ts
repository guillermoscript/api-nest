import { ApiProperty } from "@nestjs/swagger";
import { PolicyDetails } from "@prisma/client";

export class OrderDetail implements PolicyDetails{
    @ApiProperty()
    policyId: number;
    @ApiProperty()
    id: number;
    @ApiProperty()
    ClientHasTomadorId: number;
    @ApiProperty()
    periodicityId: number;
    @ApiProperty()
    primeValue: number;
    @ApiProperty()
    AnnexValue: number;
    @ApiProperty()
    ValorFinalizacion: number;
    @ApiProperty()
    Total: number;
    
                
    }
