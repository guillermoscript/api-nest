import { ApiProperty } from "@nestjs/swagger";
import { Notifications } from "@prisma/client";

export class Notification implements Notifications {
    
    @ApiProperty()
    id: number;
    @ApiProperty()
    type: string;
    @ApiProperty()
    clientId: number;
    @ApiProperty()
    notifiableType: string;
    @ApiProperty()
    notifiableId: number;
    @ApiProperty()
    data: string;
    @ApiProperty()
    readAt: Date;
    createdAt: Date;
    createdBy: string;
    updatedAt: Date;
    updatedBy: string;
    softDeletedAt: Date;
    softDeletedBy: string;
}
