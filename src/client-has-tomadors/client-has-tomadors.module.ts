import { Module } from '@nestjs/common';
import { ClientHasTakerService } from './client-has-tomadors.service';
import { ClientHasTakerController } from './client-has-tomadors.controller';
import { AbilityFactory } from 'src/ability/ability.factory';

@Module({
  controllers: [ClientHasTakerController],
  providers: [ClientHasTakerService, AbilityFactory],
})
export class ClientHasTakerModule {}
