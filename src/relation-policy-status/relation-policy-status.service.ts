import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateRelationPolicyStatusDto } from './dto/create-relation-policy-status.dto';
import { UpdateRelationPolicyStatusDto } from './dto/update-relation-policy-status.dto';

@Injectable()
export class RelationPolicyStatusService {
  constructor(private prisma: PrismaService) { }

  async create(CreateRelationPolicyStatusDto: CreateRelationPolicyStatusDto) {
    try {
      const relationPolicyStatus = await this.prisma.relationPolicyStatus.create({
        data: {
          name: CreateRelationPolicyStatusDto.name,
        },
      });

      return relationPolicyStatus;
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new ForbiddenException('Error en create relationPolicyStatus');
        }
      }
      throw error;
    }
  }

  async findAll() {
    try {
      const relationPolicyStatus = await this.prisma.relationPolicyStatus.findMany();
      return relationPolicyStatus;
    } catch (error) {
      console.log(error);
      throw new ForbiddenException('Error en findAll relationPolicyStatus');
    }
  }

  async findOne(id: number) {
    try {
      const relationPolicyStatus = await this.prisma.relationPolicyStatus.findUnique({
        where: {
          id,
        },
      });
      return relationPolicyStatus;
    } catch (error) {
      console.log(error);
      throw new ForbiddenException('Error en findOne relationPolicyStatus');
    }
  }

  async update(
    id: number,
    updaterelationPolicyStatusDto: UpdateRelationPolicyStatusDto,
  ) {
    try {
      const relationPolicyStatus = await this.prisma.relationPolicyStatus.update({
        where: {
          id,
        },
        data: {
          name: updaterelationPolicyStatusDto.name,
        },
      });

      return relationPolicyStatus;
    } catch (error) {
      console.log(error);
      throw new ForbiddenException('Error en update relationPolicyStatus');
    }
  }

  async remove(id: number) {
    try {
      const relationPolicyStatus = await this.prisma.relationPolicyStatus.delete({
        where: {
          id,
        },
      });

      return relationPolicyStatus;
    } catch (error) {
      console.log(error);
      throw new ForbiddenException('Error en remove relationPolicyStatus');
    }
  }
}