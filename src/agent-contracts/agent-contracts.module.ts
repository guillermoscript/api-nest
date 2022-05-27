import { Module } from '@nestjs/common';
import { AgentContractsService } from './agent-contracts.service';
import { AgentContractsController } from './agent-contracts.controller';
import { AbilityFactory } from 'src/ability/ability.factory';

@Module({
  controllers: [AgentContractsController],
  providers: [AgentContractsService, AbilityFactory],
})
export class AgentContractsModule {}
