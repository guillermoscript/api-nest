import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';
import { CreatePersonDto } from 'src/person/dto/create-person.dto';

export class CreateAgentDto extends CreatePersonDto {
  @ApiProperty()
  id: number;
  @ApiProperty()
  personId: number;
  @ApiProperty()
  AgenciesId: number;

  @ApiProperty()
  @IsString()
  gender: string;

  @ApiProperty()
  @IsNumber()
  cityId: number;

  @ApiProperty()
  // @IsString()
  street?: string;
}
