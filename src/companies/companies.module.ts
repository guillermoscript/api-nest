import { Module } from '@nestjs/common';
import { CompaniesService } from './companies.service';
import { CompaniesController } from './companies.controller';
import { AbilityFactory } from 'src/ability/ability.factory';

@Module({
  controllers: [CompaniesController],
  providers: [CompaniesService, AbilityFactory],
})
export class CompaniesModule {}
