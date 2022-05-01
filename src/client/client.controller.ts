import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { ClientService } from './client.service';
import { ClientDto } from './dto';

@Controller('clients')
export class ClientController {
  constructor(private clientService: ClientService) {}
  @Get('/')
  getClients() {
    return 'This action returns all clients';
  }

  @Get('/:id')
  getClient(id: string) {
    return `This action returns a #${id} client`;
  }

  @Post('/')
  postClient(@Body() dto: ClientDto) {
    // return 'This action adds a new client';
    return this.clientService.postClient(dto);
  }

  @Put('/:id')
  putClient(id: string) {
    return `This action updates a #${id} client`;
  }

  @Delete('/:id')
  deleteClient(id: string) {
    return `This action removes a #${id} client`;
  }
}
