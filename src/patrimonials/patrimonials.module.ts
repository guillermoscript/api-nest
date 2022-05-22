import { Module } from '@nestjs/common';
import { PatrimonialsService } from './patrimonials.service';
import { PatrimonialsController } from './patrimonials.controller';
import { AbilityFactory } from 'src/ability/ability.factory';

@Module({
  controllers: [PatrimonialsController],
  providers: [PatrimonialsService, AbilityFactory],
})
export class PatrimonialsModule {}
