import { ApiProperty } from '@nestjs/swagger';

export enum Gender {
  MALE = 'male',
  FEMALE = 'female',
  OTHERS = 'others',
}

export class Person {
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
  birthDate: string;

  @ApiProperty()
  gender: Gender;

  @ApiProperty()
  createdAt: string;

  @ApiProperty()
  updatedAt: string;

  @ApiProperty()
  updatedBy: string;

  @ApiProperty()
  createdBy: string;

  @ApiProperty()
  softDeletedAt: string;

  @ApiProperty()
  softDeletedBy: string;
}
