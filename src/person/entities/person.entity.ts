import { Persons } from '.prisma/client';
import { ApiProperty } from '@nestjs/swagger';


export class Person implements Persons {
  @ApiProperty()
  AddressId: number;
  @ApiProperty()
  birthDate: Date;
  @ApiProperty()
  id: number;

  @ApiProperty()
  documentTypeId: number;

  @ApiProperty()
  addressId: number;

  @ApiProperty()
  document: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  lastName: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  phone: string;

  @ApiProperty()
  gender: string;
}
