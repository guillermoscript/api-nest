import { ApiProperty } from "@nestjs/swagger";
import { entitiablenum, EntitiesHasPolizas } from "@prisma/client"

export class EntitiesHasPoliza implements EntitiesHasPolizas {
    @ApiProperty()
    id: number;
    @ApiProperty()
    policyId: number;
    @ApiProperty()
    entitiableTypes: entitiablenum;
    @ApiProperty()
    entitiableId: number;
    @ApiProperty()
    relationId: number;
    
                
    }
