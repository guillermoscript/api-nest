import { Module } from '@nestjs/common';
import { TravelsService } from './travels.service';
import { TravelsController } from './travels.controller';
import { AbilityFactory } from 'src/ability/ability.factory';

@Module({
  controllers: [TravelsController],
  providers: [TravelsService, AbilityFactory],
})
export class TravelsModule {}
