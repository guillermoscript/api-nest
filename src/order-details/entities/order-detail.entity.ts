import { ApiProperty } from "@nestjs/swagger";
import { PolicyDetails } from "@prisma/client";

export class OrderDetail implements PolicyDetails{
    @ApiProperty()
    id: number;
    @ApiProperty()
    ClientHasTomadorId: number;
    @ApiProperty()
    periodicityId: number;
    @ApiProperty()
    currencyId: number;
    @ApiProperty()
    primeValue: number;
    @ApiProperty()
    taxes: number;
    @ApiProperty()
    AnnexValue: number;
    @ApiProperty()
    comission: number;
    @ApiProperty()
    comissionPolicyStatus: boolean;
    @ApiProperty()
    ValorFinalizacion: number;
    @ApiProperty()
    Total: number;
    
                
    }
