import { ApiProperty } from '@nestjs/swagger';
import { CreatePersonDto } from 'src/person/dto/create-person.dto';

import { IsString } from 'class-validator';

export class CreateClientDto extends CreatePersonDto {
  @ApiProperty()
  @IsString()
  civilPolicyStatus: string;

  @ApiProperty()
  @IsString()
  company?: string;

  @ApiProperty()
  @IsString()
  ocupation?: string;
}
