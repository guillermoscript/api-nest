import { Configs } from '.prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class Config implements Configs {
  @ApiProperty()
  id: number;
  @ApiProperty()
  key: string;
  @ApiProperty()
  value: string;
  
        
  }
