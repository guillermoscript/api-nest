import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateCityDto {
    @ApiProperty()
    @IsString()
    name : string;

    @ApiProperty()
    @IsNumber()
    @IsNotEmpty()
    countryStateId : number;
}
