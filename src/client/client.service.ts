import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateClientDto } from './dto/create-client.dto';
import { CreateExitingPersonClientDto } from './dto/create-existing-person-client.dto';

@Injectable()
export class ClientService {
  constructor(private prisma: PrismaService) {}

  async postClient(CreateClientDto: CreateClientDto) {
    try {
      const client = await this.prisma.persons.create({
        data: {
          name: CreateClientDto.name,
          lastName: CreateClientDto.lastName,
          email: CreateClientDto.email,
          document: CreateClientDto?.document,
          phone: CreateClientDto?.phone,
          gender: CreateClientDto.gender,
          birthDate: CreateClientDto?.birthDate,
          Clients: {
            create: {
              civilPolicyStatus: CreateClientDto?.civilPolicyStatus,
              company: CreateClientDto?.company,
              ocupation: CreateClientDto?.ocupation,
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

  async existingPersonClient(
    createExitingPersonClientDto: CreateExitingPersonClientDto,
  ) {
    try {
      const client = await this.prisma.clients.create({
        data: {
          civilPolicyStatus: createExitingPersonClientDto?.civilPolicyStatus,
          company: createExitingPersonClientDto?.company,
          ocupation: createExitingPersonClientDto?.ocupation,
          Persons: {
            connect: {
              id: createExitingPersonClientDto.personId,
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
