import { Module } from '@nestjs/common';
import { TaxesService } from './taxes.service';
import { TaxesController } from './taxes.controller';
import { AbilityFactory } from 'src/ability/ability.factory';

@Module({
  controllers: [TaxesController],
  providers: [TaxesService, AbilityFactory],
})
export class TaxesModule {}
