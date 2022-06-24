import { Taxes } from '.prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class Tax implements Taxes {
  @ApiProperty()
  id: number;
  @ApiProperty()
  PolicyDetailsId: number;
  @ApiProperty()
  metakey: string;
  @ApiProperty()
  metavalue: string;
  
        
  }
