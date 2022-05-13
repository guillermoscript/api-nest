import { ApiProperty } from '@nestjs/swagger';
import { Person } from 'src/person/entities/person.entity';
export enum UserRole {
  ADMIN = 'admin',
  DIGITALIZER = 'digitalizer',
  DUMMY = 'dummy',
}

export class User extends Person {
  @ApiProperty()
  userRole: UserRole;
  @ApiProperty()
  hashedPassword: string;
}
