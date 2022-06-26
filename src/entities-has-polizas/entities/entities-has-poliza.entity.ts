import { ApiProperty } from "@nestjs/swagger";
import {ClientHasPolicies } from "@prisma/client"

export class EntitiesHasPoliza implements ClientHasPolicies {
    @ApiProperty()
    id: number;
    @ApiProperty()
    policyId: number;
    @ApiProperty()
    clientId: number;
    @ApiProperty()
    relationId: number;           
    }
