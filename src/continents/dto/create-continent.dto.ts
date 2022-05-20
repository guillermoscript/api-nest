import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreateContinentDto {
    @ApiProperty()
    @IsString()
    name : string;
}
