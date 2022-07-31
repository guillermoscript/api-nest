import { PolicyStatus } from '.prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class PolicyStatuses implements PolicyStatus {
  @ApiProperty()
  id: number;
  @ApiProperty()
  name: string;
  @ApiProperty()
  description: string;
  
        
  }
