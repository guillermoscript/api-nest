import { Policies } from '.prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class Policy implements Policies {
  @ApiProperty()
  id: number;
  @ApiProperty()
  InsuranceCarrierId: number;
  @ApiProperty()
  policyNum: number;
  @ApiProperty()
  policyStatusId: number;
  @ApiProperty()
  Risk: string;
  @ApiProperty()
  branchTypeId: number;
  @ApiProperty()
  subBranchId: number;
  @ApiProperty()
  insuredValue: number;
  @ApiProperty()
  Renovable: boolean;
  createdAt: Date;
  createdBy: string;
  updatedAt: Date;
  updatedBy: string;
  softDeletedAt: Date;
  softDeletedBy: string;
}
