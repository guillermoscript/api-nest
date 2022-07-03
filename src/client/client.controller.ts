import {
  Body,
  Controller,
  Delete,
  ForbiddenException,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Put,
  Req,
  UseGuards,
} from '@nestjs/common';
import { GetUser } from '../auth/decorator/index';
import { JwtGuard } from 'src/auth/guard';
import { ClientService } from './client.service';
import { CreateClientDto } from './dto/create-client.dto';

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
import { UpdateClientDto } from './dto/update-client.dto';

@UseGuards(JwtGuard)
@ApiTags('Clients')
@Controller('clients')
export class ClientController {
  constructor(private clientService: ClientService) { }
  @Get('/')
  @HttpCode(HttpStatus.OK)
  @ApiOkResponse({ type: CreateClientDto, description: 'Cliente encontrado' })
  @ApiNotFoundResponse({ description: 'Cliente no encontrado' })
  @UseGuards(AbilityGuard)
  @CheckAbilty(new ManageReadAbility())
  findAll() {
    return this.clientService.findAll();
  }

  @HttpCode(HttpStatus.OK)
  @Get('/:id')
  @ApiOkResponse({ type: CreateClientDto, description: 'Cliente encontrado' })
  @ApiNotFoundResponse({ description: 'Cliente no encontrado' })
  @UseGuards(AbilityGuard)
  @CheckAbilty(new ManageReadAbility())
  findOne(@Param('id') id: string) {
    return this.clientService.findOne(+id);
  }

  @Post('/')
  @HttpCode(HttpStatus.CREATED)
  @ApiOkResponse({
    type: CreateClientDto,
    description: 'Cliente ha sido creado con exito',
  })
  @ApiForbiddenResponse({
    description: 'Prohibido, puede que los datos ya existan',
  })
  @ApiUnauthorizedResponse({ description: 'No autorizado' })
  @UseGuards(AbilityGuard)
  @CheckAbilty({ action: Action.MANAGE, subject: 'all' })
  postClient(@Body() dto: CreateClientDto) {
    return this.clientService.postClient(dto);
  }

  @Post('/:id/person')
  @HttpCode(HttpStatus.CREATED)
  @ApiOkResponse({
    type: CreateClientDto,
    description: 'Cliente ha sido creado con exito',
  })
  @ApiForbiddenResponse({
    description: 'Prohibido, puede que los datos ya existan',
  })
  @ApiUnauthorizedResponse({ description: 'No autorizado' })
  @UseGuards(AbilityGuard)
  @CheckAbilty({ action: Action.MANAGE, subject: 'all' })
  createExistingPersonClient(@Body() dto: CreateClientDto) {
    return this.clientService.postClient(dto);
  }

  @Patch(':id')
  @HttpCode(HttpStatus.OK)
  @ApiOkResponse()
  @ApiNotFoundResponse()
  @UseGuards(AbilityGuard)
  @CheckAbilty(new ManageReadAbility())
  update(@Param('id') id: string, @Body() UpdateClientDto: UpdateClientDto) {
    return this.clientService.update(+id, UpdateClientDto);
  }

  @Delete('/:id')
  @HttpCode(HttpStatus.OK)
  @ApiOkResponse({ type: CreateClientDto, description: 'Cliente Eliminado' })
  @ApiNotFoundResponse({
    description: 'No se encontro el cliente especificado',
  })
  @UseGuards(AbilityGuard)
  @CheckAbilty(new ManageReadAbility())
  remove(@Param('id') id: string) {
    return this.clientService.remove(+id);
  }
}
