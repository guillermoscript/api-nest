import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsNumber, IsPhoneNumber, IsString } from "class-validator";

export class CreateAgencyDto {
    @ApiProperty()
    @IsNumber()
    @IsNotEmpty()
    document: number;

    @ApiProperty()
    @IsString()
    name: string;

    @ApiProperty()
    @IsPhoneNumber('VE')
    phone: string;

    @ApiProperty()
    @IsEmail()
    email: string;
}
