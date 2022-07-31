import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateCountryDto {
    @ApiProperty()
    @IsNumber()
    @IsNotEmpty()
    continentId : number;

    @ApiProperty()
    @IsString()
    countryName : string;
}
