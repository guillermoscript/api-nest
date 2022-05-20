import { Module } from '@nestjs/common';
import { PersonService } from './person.service';
import { PersonController } from './person.controller';
import { AbilityFactory } from 'src/ability/ability.factory';

@Module({
  controllers: [PersonController],
  providers: [PersonService, AbilityFactory],
})
export class PersonModule {}
