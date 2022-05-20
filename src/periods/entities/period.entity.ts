import { ApiProperty } from "@nestjs/swagger";
import { Periods } from "@prisma/client";

export class Period implements Periods {
  @ApiProperty()
    id: number;
    @ApiProperty()
    policyId: number;
    @ApiProperty()
    startDate: Date;
    @ApiProperty()
    endDate: Date;
    @ApiProperty()
    renewal: number;
    createdAt: Date;
    createdBy: string;
    updatedAt: Date;
    updatedBy: string;
    softDeletedAt: Date;
    softDeletedBy: string;
    
}
