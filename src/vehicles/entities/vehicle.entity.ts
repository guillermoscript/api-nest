import { ApiProperty } from "@nestjs/swagger";
import { Vehicles } from "@prisma/client";

export class Vehicle implements Vehicles{
    @ApiProperty()
    id: number;
    @ApiProperty()
    policyId: number;
    @ApiProperty()
    brand: string;
    @ApiProperty()
    class: string;
    @ApiProperty()
    model: string;
    @ApiProperty()
    vehicleType: string;
    @ApiProperty()
    serviceType: string;
    @ApiProperty()
    gasConverted: string;
    @ApiProperty()
    vehicleAge: number;
    
                
    }
