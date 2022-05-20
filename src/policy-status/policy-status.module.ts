import { Module } from '@nestjs/common';
import { PolicyStatusService } from './policy-status.service';
import { PolicyStatusController } from './policy-status.controller';
import { AbilityFactory } from 'src/ability/ability.factory';

@Module({
  controllers: [PolicyStatusController],
  providers: [PolicyStatusService, AbilityFactory],
})
export class PolicyStatusModule {}
