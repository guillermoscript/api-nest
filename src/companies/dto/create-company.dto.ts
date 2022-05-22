import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateCompanyDto {

    @ApiProperty()
    @IsNumber()
    @IsNotEmpty()
    document: number;

    @ApiProperty()
    @IsString()
    socialReason?: string;

    @ApiProperty()
    @IsString()
    economicActivity?: string;

    @ApiProperty()
    @IsString()
    webPage?: string;
}
