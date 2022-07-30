import { Agents } from '.prisma/client';
import { Person } from 'src/person/entities/person.entity';

export class Agent extends Person implements Agents {
  dummy: string;
  personId: number;
  AgenciesId: number;
}
