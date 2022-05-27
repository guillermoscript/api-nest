import { Module } from '@nestjs/common';
import { ConfigsService } from './configs.service';
import { ConfigsController } from './configs.controller';
import { AbilityFactory } from 'src/ability/ability.factory';

@Module({
  controllers: [ConfigsController],
  providers: [ConfigsService, AbilityFactory],
})
export class ConfigsModule {}
