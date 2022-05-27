import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
import { PolicyStatuses } from '../entities/policy-status.entity';

export class CreatePolicyStatusDto extends PolicyStatuses {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  policystatusName: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  description: string;
}
