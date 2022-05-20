  import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { PrismaService } from 'src/prisma/prisma.service';
  import { CreateClientHasTomadorDto } from './dto/create-client-has-tomador.dto';
  import { UpdateClientHasTomadorDto } from './dto/update-client-has-tomador.dto';
  
  @Injectable()
  export class ClientHasTomadorsService {
    constructor(private prisma: PrismaService) {}

    async create(CreateClientHasTomadorDto: CreateClientHasTomadorDto) {
      try {
        const clientHasTomador = await this.prisma.clientHasTomadors.create({
          data: {
            EntitiesHasPolizas: {
              connect: {
                id: CreateClientHasTomadorDto.clientPolizaId,
              },
            },
          },
        });
  
        return clientHasTomador;
      } catch (error) {
        if (error instanceof PrismaClientKnownRequestError) {
          if (error.code === 'P2002') {
            throw new ForbiddenException('Error en create clientHasTomador');
          }
        }
        throw error;
      }
    }
  
    async findAll() {
      try {
        const clientHasTomadors = await this.prisma.clientHasTomadors.findMany();
        return clientHasTomadors;
      } catch (error) {
        console.log(error);
        throw new ForbiddenException('Error en findAll clientHasTomador');
      }
    }
  
    async findOne(id: number) {
      try {
        const clientHasTomador = await this.prisma.clientHasTomadors.findUnique({
          where: {
            id,
          },
        });
        return clientHasTomador;
      } catch (error) {
        console.log(error);
        throw new ForbiddenException('Error en findOne clientHasTomador');
      }
    }
  
    async update(
      id: number,
      updateclientHasTomadorDto: UpdateClientHasTomadorDto,
    ) {
      try {
        const clientHasTomador = await this.prisma.clientHasTomadors.update({
          where: {
            id,
          },
          data: {
            EntitiesHasPolizas: {
              connect: {
                id: updateclientHasTomadorDto.clientPolizaId,
              },
            },
          },
        });
  
        return clientHasTomador;
      } catch (error) {
        console.log(error);
        throw new ForbiddenException('Error en update clientHasTomador');
      }
    }
  
    async remove(id: number) {
      try {
        const clientHasTomador = await this.prisma.clientHasTomadors.delete({
          where: {
            id,
          },
        });
  
        return clientHasTomador;
      } catch (error) {
        console.log(error);
        throw new ForbiddenException('Error en remove clientHasTomador');
      }
    }
  }