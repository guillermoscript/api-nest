import { ApiProperty } from "@nestjs/swagger";
import { entitiablenum } from "@prisma/client";
import { IsEnum, IsNotEmpty, IsNumber } from "class-validator";

export class CreateEntitiesHasPolizaDto {

    @ApiProperty()
    @IsNumber()
    @IsNotEmpty()
    policyId: number;

    @ApiProperty()
    @IsEnum(entitiablenum)
    entitiableTypes: entitiablenum;

    @ApiProperty()
    @IsNumber()
    entitiableId: number;

    @ApiProperty()
    @IsNumber()
    relationId: number;
}
