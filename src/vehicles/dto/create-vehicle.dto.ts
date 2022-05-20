import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

export class CreateVehicleDto {
    
    @ApiProperty()
    @IsNumber()
    policyId: number;

    @ApiProperty()
    @IsString()
    brand: string;

    @ApiProperty()
    @IsString()
    class: string
    
    @ApiProperty()
    @IsString()
    model: string;

    @ApiProperty()
    @IsString()
    vehicleType?: string;

    @ApiProperty()
    @IsString()
    serviceType?: string;

    @ApiProperty()
    @IsString()
    gasConverted?: string;

    @ApiProperty()
    @IsNumber()
    vehicleAge?: number;
}
