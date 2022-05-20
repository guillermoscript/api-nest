import { Module } from '@nestjs/common';
import { VehiclesService } from './vehicles.service';
import { VehiclesController } from './vehicles.controller';
import { AbilityFactory } from 'src/ability/ability.factory';

@Module({
  controllers: [VehiclesController],
  providers: [VehiclesService, AbilityFactory],
})
export class VehiclesModule {}
