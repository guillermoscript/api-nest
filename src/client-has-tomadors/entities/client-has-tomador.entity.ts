import { ApiProperty } from '@nestjs/swagger';
import { ClientHasTaker } from '@prisma/client';

export class ClientHasTomador implements ClientHasTaker {
  @ApiProperty()
  id: number;
  @ApiProperty()
  clientPolizaId: number;
  
        
  }
