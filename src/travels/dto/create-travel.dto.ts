import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsNotEmpty, IsNumber } from "class-validator";

export class CreateTravelDto {
    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    startCountry: number;

    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    endCountry: number;

    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    policyId: number;

    @ApiProperty()
    @IsDate()
    startDate: Date;
    
    @ApiProperty()
    @IsDate()
    endDate: Date;
}
