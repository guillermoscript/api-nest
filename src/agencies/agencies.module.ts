import { Module } from '@nestjs/common';
import { AgenciesService } from './agencies.service';
import { AgenciesController } from './agencies.controller';
import { AbilityFactory } from 'src/ability/ability.factory';

@Module({
  controllers: [AgenciesController],
  providers: [AgenciesService, AbilityFactory],
})
export class AgenciesModule {}
