import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateAddressDto {
    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    cityId: number;

    @ApiProperty()
    @IsString()
    street: string;

    @ApiProperty()
    @IsString()
    residence: string;

    @ApiProperty()
    @IsString()
    GPS: string;
}
