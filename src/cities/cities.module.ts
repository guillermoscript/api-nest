import { Module } from '@nestjs/common';
import { CitiesService } from './cities.service';
import { CitiesController } from './cities.controller';
import { AbilityFactory } from 'src/ability/ability.factory';

@Module({
  controllers: [CitiesController],
  providers: [CitiesService, AbilityFactory],
})
export class CitiesModule {}
