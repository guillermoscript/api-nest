import { AgentContracts } from '.prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class AgentContract implements AgentContracts {
  @ApiProperty()
  id: number;
  @ApiProperty()
  policyId: number;
  @ApiProperty()
  agentId: number;
  createdAt: Date;
  createdBy: string;
  updatedAt: Date;
  updatedBy: string;
  softDeletedAt: Date;
  softDeletedBy: string;
}
