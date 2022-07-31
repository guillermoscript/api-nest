import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreatePeriodicityDto {

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    name: string;
}
