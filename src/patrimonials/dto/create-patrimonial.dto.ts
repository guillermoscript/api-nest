import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreatePatrimonialDto {
    @ApiProperty()
    @IsNumber()
    @IsNotEmpty()
    policyId: number;

    @ApiProperty()
    @IsString()
    type: string;

    @ApiProperty()
    @IsNumber()
    totalValue: number;

    @ApiProperty()
    @IsNumber()
    machineryValue: number;

    @ApiProperty()
    @IsNumber()
    furnitureValue: number;
}
