import { Module } from '@nestjs/common';
import { PeriodsService } from './periods.service';
import { PeriodsController } from './periods.controller';
import { AbilityFactory } from 'src/ability/ability.factory';

@Module({
  controllers: [PeriodsController],
  providers: [PeriodsService, AbilityFactory],
})  
export class PeriodsModule {}
