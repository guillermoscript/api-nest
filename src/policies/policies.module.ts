import { Module } from '@nestjs/common';
import { PoliciesService } from './policies.service';
import { PoliciesController } from './policies.controller';
import { AbilityFactory } from 'src/ability/ability.factory';

@Module({
  controllers: [PoliciesController],
  providers: [PoliciesService, AbilityFactory],
})
export class PoliciesModule {}
