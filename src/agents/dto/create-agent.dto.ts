import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';
import { CreatePersonDto } from 'src/person/dto/create-person.dto';

export class CreateAgentDto extends CreatePersonDto {
  @ApiProperty()
  personId: number;
  @ApiProperty()
  AgenciesId: number;

  @ApiProperty()
  @IsNumber()
  cityId: number;

  @ApiProperty()
  @IsString()
  street: string;

  @ApiProperty()
  @IsString()
  residence: string;

  @ApiProperty()
  @IsString()
  GPS?: string;
}
