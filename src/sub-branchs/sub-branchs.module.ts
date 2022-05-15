import { Module } from '@nestjs/common';
import { SubBranchsService } from './sub-branchs.service';
import { SubBranchsController } from './sub-branchs.controller';
import { AbilityFactory } from 'src/ability/ability.factory';

@Module({
  controllers: [SubBranchsController],
  providers: [SubBranchsService, AbilityFactory],
})
export class SubBranchsModule {}
