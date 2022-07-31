import { Module } from '@nestjs/common';
import { RelationPolicyStatusService } from './relation-policy-status.service';
import { RelationPolicyStatusController } from './relation-policy-status.controller';
import { AbilityFactory } from 'src/ability/ability.factory';

@Module({
  controllers: [RelationPolicyStatusController],
  providers: [RelationPolicyStatusService, AbilityFactory],
})
export class RelationPolicyStatusModule {}
