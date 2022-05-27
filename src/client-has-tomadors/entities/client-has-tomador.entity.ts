import { ApiProperty } from '@nestjs/swagger';
import { ClientHasTomadors } from '@prisma/client';

export class ClientHasTomador implements ClientHasTomadors {
  @ApiProperty()
  id: number;
  @ApiProperty()
  clientPolizaId: number;
  createdAt: Date;
  createdBy: string;
  updatedAt: Date;
  updatedBy: string;
  softDeletedAt: Date;
  softDeletedBy: string;
}
