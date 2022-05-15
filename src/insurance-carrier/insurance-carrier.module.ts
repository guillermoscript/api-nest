import { Module } from '@nestjs/common';
import { InsuranceCarrierService } from './insurance-carrier.service';
import { InsuranceCarrierController } from './insurance-carrier.controller';
import { AbilityFactory } from 'src/ability/ability.factory';

@Module({
  controllers: [InsuranceCarrierController],
  providers: [InsuranceCarrierService, AbilityFactory],
})
export class InsuranceCarrierModule {}
