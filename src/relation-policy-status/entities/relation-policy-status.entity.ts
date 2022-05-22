import { ApiProperty } from "@nestjs/swagger";
import { RelationPolicyStatus } from "@prisma/client";

export class RelationPolicyStatuses implements RelationPolicyStatus {
    @ApiProperty()
    id: number;
    @ApiProperty()
    relationName: string;
    createdAt: Date;
    createdBy: string;
    updatedAt: Date;
    updatedBy: string;
    softDeletedAt: Date;
    softDeletedBy: string;
}
