import { Module } from '@nestjs/common';
import { OrderDetailsService } from './order-details.service';
import { OrderDetailsController } from './order-details.controller';
import { AbilityFactory } from 'src/ability/ability.factory';

@Module({
  controllers: [OrderDetailsController],
  providers: [OrderDetailsService, AbilityFactory],
})
export class OrderDetailsModule {}
