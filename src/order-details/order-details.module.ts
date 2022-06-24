import { Module } from '@nestjs/common';
import { PolicyDetailsService } from './order-details.service';
import { PolicyDetailsController } from './order-details.controller';
import { AbilityFactory } from 'src/ability/ability.factory';

@Module({
  controllers: [PolicyDetailsController],
  providers: [PolicyDetailsService, AbilityFactory],
})
export class PolicyDetailsModule {}
