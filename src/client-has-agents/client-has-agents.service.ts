import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateClientHasAgentDto } from './dto/create-client-has-agent.dto';
import { UpdateClientHasAgentDto } from './dto/update-client-has-agent.dto';

@Injectable()
export class ClientHasAgentsService {
  constructor(private prisma: PrismaService) {}

  async create(createClientHasAgentDto: CreateClientHasAgentDto) {
    try {
      const clientHasAgent = await this.prisma.clientHasAgents.create({
        data: {
          Clients: {
            connect: {
              id: createClientHasAgentDto.clientId,
            },
          },
          Agents: {
            connect: {
              id: createClientHasAgentDto.agentId,
            },
          },
        },
      });

      return clientHasAgent;
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new ForbiddenException('Error en create clientHasAgen');
        }
      }
      throw error;
    }
  }

  async findAll() {
    try {
      const clientHasAgents = await this.prisma.clientHasAgents.findMany();
      return clientHasAgents;
    } catch (error) {
      console.log(error);
      throw new ForbiddenException('Error en findAll clientHasAgent');
    }
  }

  async findOne(id: number) {
    try {
      const clientHasAgent = await this.prisma.clientHasAgents.findUnique({
        where: {
          id,
        },
      });
      return clientHasAgent;
    } catch (error) {
      console.log(error);
      throw new ForbiddenException('Error en findOne clientHasAgent');
    }
  }

  async update(id: number, updateClientHasAgentDto: UpdateClientHasAgentDto) {
    try {
      const clientHasAgent = await this.prisma.clientHasAgents.update({
        where: {
          id,
        },
        data: {
          Clients: {
            connect: {
              id: updateClientHasAgentDto.clientId,
            },
          },
          Agents: {
            connect: {
              id: updateClientHasAgentDto.agentId,
            },
          },
        },
      });

      return clientHasAgent;
    } catch (error) {
      console.log(error);
      throw new ForbiddenException('Error en update clientHasAgent');
    }
  }

  async remove(id: number) {
    try {
      const clientHasAgent = await this.prisma.clientHasAgents.delete({
        where: {
          id,
        },
      });

      return clientHasAgent;
    } catch (error) {
      console.log(error);
      throw new ForbiddenException('Error en remove clientHasAgent');
    }
  }
}
