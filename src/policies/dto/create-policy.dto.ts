import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsDate,
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator';

export class CreatePolicyDto {
  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  insuranceCarrierId: number;

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

  @ApiProperty()
  @IsNumber()
  clients: Array<object>;

  @ApiProperty()
  @IsNumber()
  agentId: number;

  // vehicle dto

  @ApiProperty()
  @IsNumber()
  policyId: number;

  @ApiProperty()
  @IsString()
  brand: string;

  @ApiProperty()
  @IsString()
  class: string;

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

  // patrimonials dto

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

  // travel dto

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  startCountry: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  endCountry: number;

  @ApiProperty()
  @IsDate()
  startDate: Date;

  @ApiProperty()
  @IsDate()
  endDate: Date;

  //entitieshaspoliza dto

  @ApiProperty()
  @IsNumber()
  relationId: number;

  // clienthastomador dto

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  clientPolizaId: number;

  // order details dto

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  ClientHasTomadorId: number;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  periodicityId: number;

  @ApiProperty()
  @IsNumber()
  currencyId: number;

  @ApiProperty()
  @IsNumber()
  primeValue: number;

  @ApiProperty()
  @IsNumber()
  AnnexValue: number;

  @ApiProperty()
  @IsNumber()
  comission: number;

  @ApiProperty()
  @IsBoolean()
  comissionPolicyStatus: boolean;

  @ApiProperty()
  @IsNumber()
  ValorFinalizacion: number;

  @ApiProperty()
  @IsNumber()
  Total: number;
}
