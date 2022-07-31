import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateCountryStateDto {
    @ApiProperty()
    @IsNumber()
    @IsNotEmpty()
    countryId : number;

    @ApiProperty()
    @IsString()
    name : string;
}
