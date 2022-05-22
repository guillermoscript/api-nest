import { Module } from '@nestjs/common';
import { CountriesService } from './countries.service';
import { CountriesController } from './countries.controller';
import { AbilityFactory } from 'src/ability/ability.factory';

@Module({
  controllers: [CountriesController],
  providers: [CountriesService, AbilityFactory],
})
export class CountriesModule {}
