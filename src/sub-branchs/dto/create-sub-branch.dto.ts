import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';
import { SubBranch } from '../entities/sub-branch.entity';

export class CreateSubBranchDto {
  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsNumber()
  branchTypeId: number;
}
