import { ApiProperty } from '@nestjs/swagger';
import { Continents } from '@prisma/client';

export class Continent implements Continents {
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
