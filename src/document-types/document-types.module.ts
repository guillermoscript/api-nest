import { Module } from '@nestjs/common';
import { DocumentTypesService } from './document-types.service';
import { DocumentTypesController } from './document-types.controller';
import { AbilityFactory } from 'src/ability/ability.factory';

@Module({
  controllers: [DocumentTypesController],
  providers: [DocumentTypesService,AbilityFactory],
})
export class DocumentTypesModule {}
