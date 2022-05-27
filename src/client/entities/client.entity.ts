import { Clients } from '.prisma/client';
import { ApiProperty } from '@nestjs/swagger';
import { Person } from 'src/person/entities/person.entity';

export class Client extends Person implements Clients {
  @ApiProperty()
  id: number;
  @ApiProperty()
  personId: number;
  @ApiProperty()
  civilPolicyStatus: string;
  @ApiProperty()
  company: string;
  @ApiProperty()
  ocupation: string;
  createdAt: Date;
  createdBy: string;
  updatedAt: Date;
  updatedBy: string;
  softDeletedAt: Date;
  softDeletedBy: string;
}
