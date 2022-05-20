import { Module } from '@nestjs/common';
import { CountryStatesService } from './country-states.service';
import { CountryStatesController } from './country-states.controller';
import { AbilityFactory } from 'src/ability/ability.factory';

@Module({
  controllers: [CountryStatesController],
  providers: [CountryStatesService, AbilityFactory],
})
export class CountryStatesModule {}
