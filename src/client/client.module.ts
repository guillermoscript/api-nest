import { Module } from '@nestjs/common';
import { AbilityFactory } from 'src/ability/ability.factory';
import { ClientController } from './client.controller';
import { ClientService } from './client.service';

@Module({
  controllers: [ClientController],
  providers: [ClientService, AbilityFactory],
})
export class ClientModule {}
