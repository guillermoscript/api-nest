import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { AddressesService } from 'src/addresses/addresses.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateClientDto } from './dto/create-client.dto';
import { CreateExistingPersonClientDto } from './dto/create-existing-person-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';

@Injectable()
export class ClientService {
  constructor(private prisma: PrismaService) {}

  async postClient(CreateClientDto: CreateClientDto) {
    console.log(CreateClientDto);
    console.log('Cliente');
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
          DocumentTypes: {
            connect: {
              id: CreateClientDto.documentTypeId,
            },
          },
          Addresses: {
            create: {
              cityId: CreateClientDto.cityId,
              street: CreateClientDto. street,
              residence: CreateClientDto.residence,
              GPS: CreateClientDto?.GPS,
            },
          },
        },
      });

      console.log(client);
      return client;
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new ForbiddenException('Error al crear cliente');
        }
      }
      throw error;
    }
  }

  async existingPersonClient(
    createExistingPersonClientDto: CreateExistingPersonClientDto,
  ) {
    try {
      const client = await this.prisma.clients.create({
        data: {
          civilPolicyStatus: createExistingPersonClientDto?.civilPolicyStatus,
          company: createExistingPersonClientDto?.company,
          ocupation: createExistingPersonClientDto?.ocupation,
          Persons: {
            connect: {
              id: createExistingPersonClientDto.personId,
            },
          },
        },
      });

      console.log(client);
      return client;
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new ForbiddenException('Error al crear cliente existente');
        }
      }
      throw error;
    }
  }

  async findAll() {
    try {
      const clients = this.prisma.clients.findMany({
        include: {
          Persons:{
            include: {
              Addresses: true
            },
          },
        },
      });
      return clients;
    } catch (error) {
      console.log(error);
      throw new ForbiddenException('Error al buscar clientes');
    }
  }

  async findOne(id: number) {
    try {
      const clients = this.prisma.clients.findUnique({
        where: {
          id,
        },
        include: {
          Persons: {
            include: {
              Addresses: true
            },
          },
        },
      });
      return clients;
    } catch (error) {
      console.log(error);
      throw new ForbiddenException(`Error al buscar cliente #${id}`);
    }
  }

  async update(id: number, updateClientDto: UpdateClientDto) {
    try {
      const client = await this.prisma.persons.update({
        where: {
          id,
        },
        data: {
          name: updateClientDto.name,
          lastName: updateClientDto.lastName,
          email: updateClientDto.email,
          document: updateClientDto?.document,
          phone: updateClientDto?.phone,
          gender: updateClientDto.gender,
          birthDate: updateClientDto?.birthDate,
          Clients: {
            create: {
              civilPolicyStatus: updateClientDto?.civilPolicyStatus,
              company: updateClientDto?.company,
              ocupation: updateClientDto?.ocupation,
            },
          },
          DocumentTypes: {
            connect: {
              id: updateClientDto.documentTypeId,
            },
          },
          Addresses: {
            create: {
              cityId: updateClientDto.cityId,
              street: updateClientDto. street,
              residence: updateClientDto.residence,
              GPS: updateClientDto?.GPS,
            },
          },
        },
      });

      return client;
    } catch (error) {
      console.log(error);
      throw new ForbiddenException('Error al actualizar cliente');
    }
  }

  async remove(id: number) {
    try {
      const client = await this.prisma.persons.delete({
        where: {
          id,
        },
      });

      return client;
    } catch (error) {
      console.log(error);
      throw new ForbiddenException('Error al remover cliente');
    }
  }
}
