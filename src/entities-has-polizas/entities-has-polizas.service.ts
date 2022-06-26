import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateEntitiesHasPolizaDto } from './dto/create-entities-has-poliza.dto';
import { UpdateEntitiesHasPolizaDto } from './dto/update-entities-has-poliza.dto';

@Injectable()
export class ClientHasPoliciesService {
  constructor(private prisma: PrismaService) {}

  async create(createClientHasPoliciesDto: CreateEntitiesHasPolizaDto) {
    const search = await this.prisma.clientHasPolicies.findMany({
      where: {
        policyId: createClientHasPoliciesDto.policyId,
        relationId: 1,
      },
    });

    if (search.length > 1) {
      throw new ForbiddenException(
        'Error entitihaspolicy tiene ya un tomador mate',
      );
    }

    try {
      const entitiesHasPoliza = await this.prisma.clientHasPolicies.create({
        data: {
          Clients: {
            connect: {
              id: createClientHasPoliciesDto.clientId,
            },
          },
          Policies: {
            connect: {
              id: createClientHasPoliciesDto.policyId,
            },
          },
          RelationPolicyStatus: {
            connect: {
              id: createClientHasPoliciesDto.relationId,
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
      const clientHasPolicies =
        await this.prisma.clientHasPolicies.findMany();
      return clientHasPolicies;
    } catch (error) {
      console.log(error);
      throw new ForbiddenException('Error en findAll entitiesHasPoliza');
    }
  }

  async findOne(id: number) {
    try {
      const entitiesHasPoliza = await this.prisma.clientHasPolicies.findUnique(
        {
          where: {
            id,
          },
        },
      );
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
      const entitiesHasPoliza = await this.prisma.clientHasPolicies.update({
        where: {
          id,
        },
        data: {
          Clients: {
            connect: {
              id: updateentitiesHasPolizaDto.clientId,
            },
          },
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
      const entitiesHasPoliza = await this.prisma.clientHasPolicies.delete({
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
