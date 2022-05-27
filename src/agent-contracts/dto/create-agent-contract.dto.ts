import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';

export class CreateAgentContractDto {
  @ApiProperty()
  @IsNumber()
  policyId: number;

  @ApiProperty()
  @IsNumber()
  agentId: number;
}
