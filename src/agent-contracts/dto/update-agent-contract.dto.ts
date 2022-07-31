import { PartialType } from '@nestjs/swagger';
import { CreateAgentContractDto } from './create-agent-contract.dto';

export class UpdateAgentContractDto extends PartialType(CreateAgentContractDto) {}
