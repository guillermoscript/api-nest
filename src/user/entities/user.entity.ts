import { Users } from '.prisma/client';
import { ApiProperty } from '@nestjs/swagger';
import { Person } from 'src/person/entities/person.entity';
export enum UserRole {
  ADMIN = 'admin',
  DIGITALIZER = 'digitalizer',
  DUMMY = 'dummy',
}

// export class User extends Person {
//   @ApiProperty()
//   userRole: UserRole;
//   @ApiProperty()
//   hashedPassword: string;
// }
export class User extends Person implements Users {
  @ApiProperty()
  id: number;
  @ApiProperty()
  userRole: UserRole;
  @ApiProperty()
  hashedPassword: string;

  
        
  }
