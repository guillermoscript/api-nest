import { Agents } from '.prisma/client';
import { Person } from 'src/person/entities/person.entity';

export class Agent extends Person implements Agents {
  personId: number;
  AgenciesId: number;
}
