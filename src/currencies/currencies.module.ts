import { Module } from '@nestjs/common';
import { CurrenciesService } from './currencies.service';
import { CurrenciesController } from './currencies.controller';
import { AbilityFactory } from 'src/ability/ability.factory';

@Module({
  controllers: [CurrenciesController],
  providers: [CurrenciesService, AbilityFactory],
})
export class CurrenciesModule {}
