import {
  Controller, Get, Post, Body, Patch, Param, Delete,  HttpCode,
 HttpStatus,
 UseGuards,
} from '@nestjs/common';
import { GetUser } from '../auth/decorator/index';
import { JwtGuard } from 'src/auth/guard';
import {
  ApiForbiddenResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { Action } from 'src/ability/ability.factory';
import { CheckAbilty, ManageReadAbility } from 'src/ability/ability.decorator';
import { AbilityGuard } from 'src/ability/ability.guard';
import { VehiclesService } from './vehicles.service';
import { CreateVehicleDto } from './dto/create-vehicle.dto';
import { UpdateVehicleDto } from './dto/update-vehicle.dto';

@UseGuards(JwtGuard)
@ApiTags('Vehicles')
@Controller('vehicles')
export class VehiclesController {
 constructor(private readonly vehiclesService: VehiclesService) {}

 @Post()
 @HttpCode(HttpStatus.CREATED)
 @ApiOkResponse()
 @ApiForbiddenResponse()
 @ApiUnauthorizedResponse()
 @UseGuards(AbilityGuard)
 @CheckAbilty({ action: Action.MANAGE, subject: 'all' })
 create(@Body() createVehicleDto: CreateVehicleDto) {
   return this.vehiclesService.create(createVehicleDto);
 }

 @Get()
 @HttpCode(HttpStatus.OK)
 @ApiOkResponse()
 @ApiNotFoundResponse()
 @UseGuards(AbilityGuard)
 @CheckAbilty(new ManageReadAbility())
 findAll() {
   return this.vehiclesService.findAll();
 }

 @Get(':id')
 @HttpCode(HttpStatus.OK)
 @Get('/:id')
 @ApiOkResponse()
 @ApiNotFoundResponse()
 @UseGuards(AbilityGuard)
 @CheckAbilty(new ManageReadAbility())
 findOne(@Param('id') id: string) {
   return this.vehiclesService.findOne(+id);
 }

 @Patch(':id')

 @HttpCode(HttpStatus.OK)
 @ApiOkResponse()
 @ApiNotFoundResponse()
 @UseGuards(AbilityGuard)
 @CheckAbilty(new ManageReadAbility())
 update(@Param('id') id: string, @Body() updateVehicleDto: UpdateVehicleDto) {
   return this.vehiclesService.update(+id, updateVehicleDto);
 }

 @Delete(':id')
 @HttpCode(HttpStatus.OK)
 @ApiOkResponse()
 @ApiNotFoundResponse()
 @UseGuards(AbilityGuard)
 @CheckAbilty(new ManageReadAbility())
 remove(@Param('id') id: string) {
   return this.vehiclesService.remove(+id);
 }
}


