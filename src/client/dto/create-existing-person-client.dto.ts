import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

// TODO tal vez eliminar el extends por que puede haber una ocacion que se cree un cliente
// pero esete sea un usuario, eso crearia un nuevo person y no es la idea
export class CreateExitingPersonClientDto {
  @ApiProperty()
  @IsNumber()
  personId: number;

  @ApiProperty()
  @IsString()
  civilPolicyStatus?: string;

  @ApiProperty()
  @IsString()
  company?: string;

  @ApiProperty()
  @IsString()
  ocupation?: string;
}
