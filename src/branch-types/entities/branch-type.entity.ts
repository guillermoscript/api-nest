import { BranchTypes } from '.prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class BranchType implements BranchTypes {
  @ApiProperty()
  id: number;
  @ApiProperty()
  name: string;
  createdAt: Date;
  createdBy: string;
  updatedAt: Date;
  updatedBy: string;
  softDeletedAt: Date;
  softDeletedBy: string;
}
