import { Module } from '@nestjs/common';
import { PeriodicitiesService } from './periodicities.service';
import { PeriodicitiesController } from './periodicities.controller';
import { AbilityFactory } from 'src/ability/ability.factory';

@Module({
  controllers: [PeriodicitiesController],
  providers: [PeriodicitiesService,AbilityFactory],
})
export class PeriodicitiesModule {}
