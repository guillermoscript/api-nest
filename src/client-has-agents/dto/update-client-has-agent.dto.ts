import { PartialType } from '@nestjs/swagger';
import { CreateClientHasAgentDto } from './create-client-has-agent.dto';

export class UpdateClientHasAgentDto extends PartialType(
  CreateClientHasAgentDto,
) {}
