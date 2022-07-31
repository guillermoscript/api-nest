import { Module } from '@nestjs/common';
import { ClientHasAgentsService } from './client-has-agents.service';
import { ClientHasAgentsController } from './client-has-agents.controller';
import { AbilityFactory } from 'src/ability/ability.factory';

@Module({
  controllers: [ClientHasAgentsController],
  providers: [ClientHasAgentsService, AbilityFactory],
})
export class ClientHasAgentsModule {}
