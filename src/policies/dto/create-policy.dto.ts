import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreatePolicyDto {
  [x: string]: any;
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  insuranceCarrierId: string;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  policyNum: number;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  policyStatusId: number;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  insuredValue: number;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  branchTypeId: number;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  subBranchId: number;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  Risk: string;

  @ApiProperty()
  @IsBoolean()
  @IsNotEmpty()
  Renovable: boolean;
}
