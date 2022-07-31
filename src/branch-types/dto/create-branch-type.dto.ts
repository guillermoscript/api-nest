import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';
import { BranchType } from '../entities/branch-type.entity';

export class CreateBranchTypeDto {
  @ApiProperty()
  @IsString()
  name: string;
}
