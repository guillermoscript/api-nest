import { Module } from '@nestjs/common';
import { NotificationsService } from './notifications.service';
import { NotificationsController } from './notifications.controller';
import { AbilityFactory } from 'src/ability/ability.factory';

@Module({
  controllers: [NotificationsController],
  providers: [NotificationsService, AbilityFactory],
})
export class NotificationsModule {}
