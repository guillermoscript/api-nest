import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { CreatePersonDto } from 'src/person/dto/create-person.dto';
import { UserRole } from '../entities/user.entity';

export class CreateUserDto extends CreatePersonDto {
  @ApiProperty()
  // @IsNotEmpty()
  userRole?: UserRole;

  @ApiProperty()
  @IsNotEmpty()
  email: string;

  @ApiProperty()
  @IsNotEmpty()
  password: string;
}
