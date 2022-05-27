import { PolicyStatus } from '.prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class PolicyStatuses implements PolicyStatus {
  @ApiProperty()
  id: number;
  @ApiProperty()
  policystatusName: string;
  @ApiProperty()
  description: string;
  createdAt: Date;
  createdBy: string;
  updatedAt: Date;
  updatedBy: string;
  softDeletedAt: Date;
  softDeletedBy: string;
}
