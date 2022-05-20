import { Module } from '@nestjs/common';
import { EntitiesHasPolizasService } from './entities-has-polizas.service';
import { EntitiesHasPolizasController } from './entities-has-polizas.controller';
import { AbilityFactory } from 'src/ability/ability.factory';

@Module({
  controllers: [EntitiesHasPolizasController],
  providers: [EntitiesHasPolizasService, AbilityFactory],
})
export class EntitiesHasPolizasModule {}
