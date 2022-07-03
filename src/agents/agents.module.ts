import { Module } from '@nestjs/common';
import { AgentsService } from './agents.service';
import { AgentsController } from './agents.controller';
import { AbilityFactory } from 'src/ability/ability.factory';

@Module({
  controllers: [AgentsController],
  providers: [AgentsService, AbilityFactory],
})
export class AgentsModule { }
