import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateAgentContractDto } from './dto/create-agent-contract.dto';
import { UpdateAgentContractDto } from './dto/update-agent-contract.dto';

@Injectable()
export class AgentContractsService {
  constructor(private prisma: PrismaService) {}

  async create(CreateAgentContractsDto: CreateAgentContractDto) {
    try {
      const agentContracts = await this.prisma.agentContracts.create({
        data: {
          Policies: {
            connect: {
              id: CreateAgentContractsDto.policyId,
            },
          },
          Agents: {
            connect: {
              id: CreateAgentContractsDto.agentId,
            },
          },
        },
      });

      return agentContracts;
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new ForbiddenException('Error en create agentContracts');
        }
      }
      throw error;
    }
  }

  async findAll() {
    try {
      const agentContracts = await this.prisma.agentContracts.findMany();
      return agentContracts;
    } catch (error) {
      console.log(error);
      throw new ForbiddenException('Error en findAll agentContracts');
    }
  }

  async findOne(id: number) {
    try {
      const agentContracts = await this.prisma.agentContracts.findUnique({
        where: {
          id,
        },
      });
      return agentContracts;
    } catch (error) {
      console.log(error);
      throw new ForbiddenException('Error en findOne agentContracts');
    }
  }

  async update(id: number, updateagentContractsDto: UpdateAgentContractDto) {
    try {
      const agentContracts = await this.prisma.agentContracts.update({
        where: {
          id,
        },
        data: {
          Policies: {
            connect: {
              id: updateagentContractsDto.policyId,
            },
          },
          Agents: {
            connect: {
              id: updateagentContractsDto.agentId,
            },
          },
        },
      });

      return agentContracts;
    } catch (error) {
      console.log(error);
      throw new ForbiddenException('Error en update agentContracts');
    }
  }

  async remove(id: number) {
    try {
      const agentContracts = await this.prisma.agentContracts.delete({
        where: {
          id,
        },
      });

      return agentContracts;
    } catch (error) {
      console.log(error);
      throw new ForbiddenException('Error en remove agentContracts');
    }
  }
}
