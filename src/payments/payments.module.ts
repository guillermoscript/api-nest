import { Module } from '@nestjs/common';
import { PaymentsService } from './payments.service';
import { PaymentsController } from './payments.controller';
import { AbilityFactory } from 'src/ability/ability.factory';

@Module({
  controllers: [PaymentsController],
  providers: [PaymentsService, AbilityFactory],
})
export class PaymentsModule {}
