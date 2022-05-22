import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsNumber, IsString } from "class-validator";

export class CreateNotificationDto {

    @ApiProperty()
    @IsString()
    type: string;
    
    @ApiProperty()
    @IsNumber()
    clientId: number;

    @ApiProperty()
    @IsString()
    notifiableType: string;

    @ApiProperty()
    @IsNumber()
    notifiableId: number;

    @ApiProperty()
    @IsString()
    data: string;

    @ApiProperty()
    @IsDate()
    readAt: Date;
}
