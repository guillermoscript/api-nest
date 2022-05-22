  import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { PrismaService } from 'src/prisma/prisma.service';
  import { CreateEntitiesHasPolizaDto } from './dto/create-entities-has-poliza.dto';
  import { UpdateEntitiesHasPolizaDto } from './dto/update-entities-has-poliza.dto';
  
  @Injectable()
  export class EntitiesHasPolizasService {
    constructor(private prisma: PrismaService) {}

    async create(CreateEntitiesHasPolizasDto: CreateEntitiesHasPolizaDto) {
      try {
        const entitiesHasPoliza = await this.prisma.entitiesHasPolizas.create({
          data: {
            entitiableTypes: CreateEntitiesHasPolizasDto.entitiableTypes,
            entitiableId: CreateEntitiesHasPolizasDto.entitiableId,
            Policies: {
              connect: {
                id: CreateEntitiesHasPolizasDto.policyId,
              },
            },
            RelationPolicyStatus: {
              connect: {
                id: CreateEntitiesHasPolizasDto.relationId,
              },
            },
          },
        });
  
        return entitiesHasPoliza;
      } catch (error) {
        if (error instanceof PrismaClientKnownRequestError) {
          if (error.code === 'P2002') {
            throw new ForbiddenException('Error en create entitiesHasPoliza');
          }
        }
        throw error;
      }
    }
  
    async findAll() {
      try {
        const entitiesHasPolizas = await this.prisma.entitiesHasPolizas.findMany();
        return entitiesHasPolizas;
      } catch (error) {
        console.log(error);
        throw new ForbiddenException('Error en findAll entitiesHasPoliza');
      }
    }
  
    async findOne(id: number) {
      try {
        const entitiesHasPoliza = await this.prisma.entitiesHasPolizas.findUnique({
          where: {
            id,
          },
        });
        return entitiesHasPoliza;
      } catch (error) {
        console.log(error);
        throw new ForbiddenException('Error en findOne entitiesHasPoliza');
      }
    }
  
    async update(
      id: number,
      updateentitiesHasPolizaDto: UpdateEntitiesHasPolizaDto,
    ) {
      try {
        const entitiesHasPoliza = await this.prisma.entitiesHasPolizas.update({
          where: {
            id,
          },
          data: {
            entitiableTypes: updateentitiesHasPolizaDto.entitiableTypes,
            entitiableId: updateentitiesHasPolizaDto.entitiableId,
            Policies: {
              connect: {
                id: updateentitiesHasPolizaDto.policyId,
              },
            },
            RelationPolicyStatus: {
              connect: {
                id: updateentitiesHasPolizaDto.relationId,
              },
            },
          },
        });
  
        return entitiesHasPoliza;
      } catch (error) {
        console.log(error);
        throw new ForbiddenException('Error en update entitiesHasPoliza');
      }
    }
  
    async remove(id: number) {
      try {
        const entitiesHasPoliza = await this.prisma.entitiesHasPolizas.delete({
          where: {
            id,
          },
        });
  
        return entitiesHasPoliza;
      } catch (error) {
        console.log(error);
        throw new ForbiddenException('Error en remove entitiesHasPoliza');
      }
    }
  }