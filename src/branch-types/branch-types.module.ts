import { Module } from '@nestjs/common';
import { BranchTypesService } from './branch-types.service';
import { BranchTypesController } from './branch-types.controller';
import { AbilityFactory } from 'src/ability/ability.factory';

@Module({
  controllers: [BranchTypesController],
  providers: [BranchTypesService, AbilityFactory],
})
export class BranchTypesModule {}
