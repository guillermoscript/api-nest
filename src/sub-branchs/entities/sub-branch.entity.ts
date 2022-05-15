import { SubBranchs } from '.prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class SubBranch implements SubBranchs {
  @ApiProperty()
  id: number;
  @ApiProperty()
  name: string;
  @ApiProperty()
  branchTypeId: number;
  createdAt: Date;
  createdBy: string;
  updatedAt: Date;
  updatedBy: string;
  softDeletedAt: Date;
  softDeletedBy: string;
}
