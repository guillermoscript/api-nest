import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { PrismaService } from 'src/prisma/prisma.service';
import { ClientDto } from './dto';

@Injectable()
export class ClientService {
  constructor(private prisma: PrismaService) {}

  async postClient(dto: ClientDto) {
    const {
      gender,
      phone,
      email,
      name,
      birthDate,
      civilPolicyStatus,
      company,
      ocupation,
      documentTypeId,
    } = dto;
    try {
      const entity = await this.prisma.entities.create({
        data: {
          email,
          phone,
          name,
          Persons: {
            create: {
              gender: 'Others',
              birthDate,
              Clients: {
                create: {
                  company,
                  ocupation,
                  civilPolicyStatus,
                },
              },
              Addresses: {
                create: {
                  Address1: 'test creando clients',
                },
              },
            },
          },
        },
      });
      console.log(entity);
      return entity;
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new ForbiddenException(' Aye Mateee that email is mine ya');
        }
      }
      throw error;
    }
  }
}
