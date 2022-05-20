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
import { CountryStatesService } from './country-states.service';
import { CreateCountryStateDto } from './dto/create-country-state.dto';
import { UpdateCountryStateDto } from './dto/update-country-state.dto';

@UseGuards(JwtGuard)
@ApiTags('CountryStates')
@Controller('country-states')
export class CountryStatesController {
 constructor(private readonly countryStatesService: CountryStatesService) {}

 @Post()
 @HttpCode(HttpStatus.CREATED)
 @ApiOkResponse()
 @ApiForbiddenResponse()
 @ApiUnauthorizedResponse()
 @UseGuards(AbilityGuard)
 @CheckAbilty({ action: Action.MANAGE, subject: 'all' })
 create(@Body() createCountryStateDto: CreateCountryStateDto) {
   return this.countryStatesService.create(createCountryStateDto);
 }

 @Get()
 @HttpCode(HttpStatus.OK)
 @ApiOkResponse()
 @ApiNotFoundResponse()
 @UseGuards(AbilityGuard)
 @CheckAbilty(new ManageReadAbility())
 findAll() {
   return this.countryStatesService.findAll();
 }

 @Get(':id')
 @HttpCode(HttpStatus.OK)
 @Get('/:id')
 @ApiOkResponse()
 @ApiNotFoundResponse({ description: 'CountryState not found' })
 @UseGuards(AbilityGuard)
 @CheckAbilty(new ManageReadAbility())
 findOne(@Param('id') id: string) {
   return this.countryStatesService.findOne(+id);
 }

 @Patch(':id')

 @HttpCode(HttpStatus.OK)
 @ApiOkResponse()
 @ApiNotFoundResponse()
 @UseGuards(AbilityGuard)
 @CheckAbilty(new ManageReadAbility())
 update(@Param('id') id: string, @Body() updateCountryStateDto: UpdateCountryStateDto) {
   return this.countryStatesService.update(+id, updateCountryStateDto);
 }

 @Delete(':id')
 @HttpCode(HttpStatus.OK)
 @ApiOkResponse()
 @ApiNotFoundResponse()
 @UseGuards(AbilityGuard)
 @CheckAbilty(new ManageReadAbility())
 remove(@Param('id') id: string) {
   return this.countryStatesService.remove(+id);
 }
}


