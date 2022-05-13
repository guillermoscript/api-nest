import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateClientDto } from './dto/create-client.dto';

@Injectable()
export class ClientService {
  constructor(private prisma: PrismaService) {}

  async postClient(CreateClientDto) {
    try {
      const client = await this.prisma.persons.create({
        data: {
          ...CreateClientDto,
          Clients: {
            create: {
              civilPolicyStatus: CreateClientDto.civilPolicyStatus,
              company: CreateClientDto.company,
              ocupation: CreateClientDto.ocupation,
            },
          },
        },
      });

      console.log(client);
      return client;
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new ForbiddenException(' Aye Mateee that email is mine ya');
        }
      }
      throw error;
    }
  }

  async getClients() {
    try {
      const clients = this.prisma.clients.findMany({
        include: {
          Persons: true,
        },
      });
      return clients;
    } catch (error) {
      console.log(error);
      throw new ForbiddenException(' Aye Mateee thats an error xd');
    }
  }
}
