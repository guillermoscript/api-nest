import { ApiProperty } from "@nestjs/swagger";
import { Agencies } from "@prisma/client";

export class Agency implements Agencies {
    @ApiProperty()
    id: number;
    @ApiProperty()
    document: number;
    @ApiProperty()
    email: string;
    @ApiProperty()
    name: string;
    @ApiProperty()
    phone: string;
}
