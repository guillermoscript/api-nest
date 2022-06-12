import { ApiProperty } from "@nestjs/swagger";
import { Currencies } from "@prisma/client";

export class Currency implements Currencies {
    @ApiProperty()
    id: number;
    @ApiProperty()
    name: string;
    @ApiProperty()
    symbol: string;
}
