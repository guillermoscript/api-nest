import {
  Body,
  Controller,
  Delete,
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
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';
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

@UseGuards(JwtGuard)
@ApiTags('Clients')
@Controller('clients')
export class ClientController {
  constructor(private clientService: ClientService) {}
  @Get('/')
  @HttpCode(HttpStatus.OK)
  @ApiOkResponse({ type: CreateClientDto, description: 'Client response' })
  @ApiNotFoundResponse({ description: 'Client not found' })
  getClients() {
    return this.clientService.getClients();
  }

  @HttpCode(HttpStatus.OK)
  @Get('/:id')
  getClient(@Param('id', ParseIntPipe) id: number): string {
    return `This action returns a #${id} client`;
  }

  @HttpCode(HttpStatus.CREATED)
  @Post('/')
  @ApiOkResponse({
    type: CreateClientDto,
    description: 'Client Created Response',
  })
  @ApiForbiddenResponse({ description: 'Forbidden email may exist mate' })
  @ApiUnauthorizedResponse({ description: 'Unauthorized Mate' })
  postClient(@Body() dto: CreateClientDto) {
    // return 'This action adds a new client';
    return this.clientService.postClient(dto);
  }

  @Put('/:id')
  @HttpCode(HttpStatus.OK)
  putClient(id: string) {
    return `This action updates a #${id} client`;
  }

  @Delete('/:id')
  @HttpCode(HttpStatus.OK)
  deleteClient(id: string) {
    return `This action removes a #${id} client`;
  }
}
