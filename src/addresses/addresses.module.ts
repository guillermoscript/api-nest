import { Module } from '@nestjs/common';
import { AddressesService } from './addresses.service';
import { AddressesController } from './addresses.controller';
import { AbilityFactory } from 'src/ability/ability.factory';

@Module({
  controllers: [AddressesController],
  providers: [AddressesService, AbilityFactory],
})
export class AddressesModule {}
