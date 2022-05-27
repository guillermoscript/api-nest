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

@UseGuards(JwtGuard)
@ApiTags('Clients')
@Controller('clients')
export class ClientController {
  constructor(private clientService: ClientService) {}
  @Get('/')
  @HttpCode(HttpStatus.OK)
  @ApiOkResponse({ type: CreateClientDto, description: 'Client response' })
  @ApiNotFoundResponse({ description: 'Client not found' })
  @UseGuards(AbilityGuard)
  @CheckAbilty(new ManageReadAbility())
  getClients() {
    return this.clientService.getClients();
  }

  @HttpCode(HttpStatus.OK)
  @Get('/:id')
  @ApiOkResponse({ type: CreateClientDto, description: 'Client response' })
  @ApiNotFoundResponse({ description: 'Client not found' })
  @UseGuards(AbilityGuard)
  @CheckAbilty(new ManageReadAbility())
  getClient(@Param('id', ParseIntPipe) id: number): string {
    return `This action returns a #${id} client`;
  }

  @Post('/')
  @HttpCode(HttpStatus.CREATED)
  @ApiOkResponse({
    type: CreateClientDto,
    description: 'Client Created Response',
  })
  @ApiForbiddenResponse({ description: 'Forbidden email may exist mate' })
  @ApiUnauthorizedResponse({ description: 'Unauthorized Mate' })
  @UseGuards(AbilityGuard)
  @CheckAbilty({ action: Action.MANAGE, subject: 'all' })
  postClient(@Body() dto: CreateClientDto) {
    return this.clientService.postClient(dto);
  }

  @Post('/:id/person')
  @HttpCode(HttpStatus.CREATED)
  @ApiOkResponse({
    type: CreateClientDto,
    description: 'Client Created Response',
  })
  @ApiForbiddenResponse({ description: 'Forbidden email may exist mate' })
  @ApiUnauthorizedResponse({ description: 'Unauthorized Mate' })
  @UseGuards(AbilityGuard)
  @CheckAbilty({ action: Action.MANAGE, subject: 'all' })
  createExistingPersonClient(@Body() dto: CreateClientDto) {
    return this.clientService.postClient(dto);
  }

  @Put('/:id')
  @HttpCode(HttpStatus.OK)
  @ApiOkResponse({ type: CreateClientDto, description: 'Client response' })
  @ApiNotFoundResponse({ description: 'Client not found' })
  @UseGuards(AbilityGuard)
  @CheckAbilty(new ManageReadAbility())
  putClient(id: string) {
    return `This action updates a #${id} client`;
  }

  @Delete('/:id')
  @HttpCode(HttpStatus.OK)
  @ApiOkResponse({ type: CreateClientDto, description: 'Client response' })
  @ApiNotFoundResponse({ description: 'Client not found' })
  @UseGuards(AbilityGuard)
  @CheckAbilty(new ManageReadAbility())
  deleteClient(id: string) {
    return `This action removes a #${id} client`;
  }
}
