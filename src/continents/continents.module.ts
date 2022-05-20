import { Module } from '@nestjs/common';
import { ContinentsService } from './continents.service';
import { ContinentsController } from './continents.controller';
import { AbilityFactory } from 'src/ability/ability.factory';

@Module({
  controllers: [ContinentsController],
  providers: [ContinentsService, AbilityFactory],
})
export class ContinentsModule {}
