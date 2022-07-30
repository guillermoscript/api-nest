import { ApiProperty } from '@nestjs/swagger';
import { Addresses } from '@prisma/client';

export class address implements Addresses {
  @ApiProperty()
  id: number;
  @ApiProperty()
  cityId: number;
  @ApiProperty()
  street: string;
}
