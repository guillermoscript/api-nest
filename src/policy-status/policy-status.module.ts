import { Module } from '@nestjs/common';
import { PolicyStatusService } from './policy-status.service';
import { PolicyStatusController } from './policy-status.controller';

@Module({
  controllers: [PolicyStatusController],
  providers: [PolicyStatusService]
})
export class PolicyStatusModule {}
