import { ApiProperty } from "@nestjs/swagger";
import {EntitiesHasPolizas } from "@prisma/client"

export class EntitiesHasPoliza implements EntitiesHasPolizas {
    @ApiProperty()
    id: number;
    @ApiProperty()
    policyId: number;
    @ApiProperty()
    clientId: number;
    @ApiProperty()
    relationId: number;           
    }
