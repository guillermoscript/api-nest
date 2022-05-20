import { Module } from '@nestjs/common';
import { ClientHasTomadorsService } from './client-has-tomadors.service';
import { ClientHasTomadorsController } from './client-has-tomadors.controller';
import { AbilityFactory } from 'src/ability/ability.factory';

@Module({
  controllers: [ClientHasTomadorsController],
  providers: [ClientHasTomadorsService, AbilityFactory],
})
export class ClientHasTomadorsModule {}
