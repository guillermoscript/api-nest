import { ApiProperty } from '@nestjs/swagger';
import { CreatePersonDto } from 'src/person/dto/create-person.dto';
import { UserRole } from '../entities/user.entity';

export class CreateUserDto extends CreatePersonDto {
  @ApiProperty()
  userRole: UserRole;

  @ApiProperty()
  email: string;

  @ApiProperty()
  password: string;
}
