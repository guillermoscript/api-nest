import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateAgentDto {
  @ApiProperty()
  personId: number;
  @ApiProperty()
  AgenciesId: number;
}
