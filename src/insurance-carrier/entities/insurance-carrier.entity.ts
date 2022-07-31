import { InsuranceCarriers } from '.prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class InsuranceCarrier implements InsuranceCarriers {
  @ApiProperty()
  id: number;
  @ApiProperty()
  document: number;
  @ApiProperty()
  name: string;
  @ApiProperty()
  phone: string;
  @ApiProperty()
  email: string;
  @ApiProperty()
  account: string;
  @ApiProperty()
  paymentLink: string;
  
        
  }
