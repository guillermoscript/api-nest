import { Module } from '@nestjs/common';
import { ClientHasPoliciesService } from './entities-has-polizas.service';
import { ClientHasPoliciesController } from './entities-has-polizas.controller';
import { AbilityFactory } from 'src/ability/ability.factory';

@Module({
  controllers: [ClientHasPoliciesController],
  providers: [ClientHasPoliciesService, AbilityFactory],
})
export class ClientHasPoliciesModule {}
