import { ClientHasAgents } from '.prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class ClientHasAgent implements ClientHasAgents {
  @ApiProperty()
  id: number;
  @ApiProperty()
  clientId: number;
  @ApiProperty()
  agentId: number;
  
        
  }
