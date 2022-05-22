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
import { ClientHasTomadorsService } from './client-has-tomadors.service';
import { CreateClientHasTomadorDto } from './dto/create-client-has-tomador.dto';
import { UpdateClientHasTomadorDto } from './dto/update-client-has-tomador.dto';

@UseGuards(JwtGuard)
@ApiTags('Client has Tomadors')
@Controller('client-has-tomadors')
export class ClientHasTomadorsController {
 constructor(private readonly clientHasTomadorsService: ClientHasTomadorsService) {}

 @Post()
 @HttpCode(HttpStatus.CREATED)
 @ApiOkResponse()
 @ApiForbiddenResponse()
 @ApiUnauthorizedResponse()
 @UseGuards(AbilityGuard)
 @CheckAbilty({ action: Action.MANAGE, subject: 'all' })
 create(@Body() createClientHasTomadorDto: CreateClientHasTomadorDto) {
   return this.clientHasTomadorsService.create(createClientHasTomadorDto);
 }

 @Get()
 @HttpCode(HttpStatus.OK)
 @ApiOkResponse()
 @ApiNotFoundResponse()
 @UseGuards(AbilityGuard)
 @CheckAbilty(new ManageReadAbility())
 findAll() {
   return this.clientHasTomadorsService.findAll();
 }

 @Get(':id')
 @HttpCode(HttpStatus.OK)
 @Get('/:id')
 @ApiOkResponse()
 @ApiNotFoundResponse()
 @UseGuards(AbilityGuard)
 @CheckAbilty(new ManageReadAbility())
 findOne(@Param('id') id: string) {
   return this.clientHasTomadorsService.findOne(+id);
 }

 @Patch(':id')

 @HttpCode(HttpStatus.OK)
 @ApiOkResponse()
 @ApiNotFoundResponse()
 @UseGuards(AbilityGuard)
 @CheckAbilty(new ManageReadAbility())
 update(@Param('id') id: string, @Body() updateClientHasTomadorDto: UpdateClientHasTomadorDto) {
   return this.clientHasTomadorsService.update(+id, updateClientHasTomadorDto);
 }

 @Delete(':id')
 @HttpCode(HttpStatus.OK)
 @ApiOkResponse()
 @ApiNotFoundResponse()
 @UseGuards(AbilityGuard)
 @CheckAbilty(new ManageReadAbility())
 remove(@Param('id') id: string) {
   return this.clientHasTomadorsService.remove(+id);
 }
}


