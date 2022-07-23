import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateAgentDto } from './dto/create-agent.dto';
import { UpdateAgentDto } from './dto/update-agent.dto';

@Injectable()
export class AgentsService {
  constructor(private prisma: PrismaService) {}
  async postAgent(CreateAgentDto: CreateAgentDto) {
    console.log(CreateAgentDto);
    console.log('Agente');
    try {
      const Agent = await this.prisma.persons.create({
        data: {
          name: CreateAgentDto.name,
          lastName: CreateAgentDto.lastName,
          email: CreateAgentDto.email,
          document: CreateAgentDto?.document,
          phone: CreateAgentDto?.phone,
          gender: CreateAgentDto.gender,
          birthDate: CreateAgentDto?.birthDate,
          Agents: {
            create: {
              AgenciesId : 1
            },
          },
          DocumentTypes: {
            connect: {
              id: CreateAgentDto.documentTypeId,
            },
          },
          Addresses: {
            create: {
              cityId: CreateAgentDto.cityId,
              street: CreateAgentDto?.street,
              residence: CreateAgentDto?.residence,
              GPS: CreateAgentDto?.GPS,
            },
          },
        },
      });

      console.log(Agent);
      return Agent;
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new ForbiddenException('El Documento o Correo ingresado ya esta registrado');
        }
      }
      throw error;
    }
  }

  async findAll() {
    try {
      const agents = this.prisma.agents.findMany({
        include: {
          Persons:{
            include: {
              Addresses: true
            },
          },
        },
      });
      return agents;
    } catch (error) {
      console.log(error);
      throw new ForbiddenException('Error al buscar Agente');
    }
  }

  async findOne(id: number) {
    try {
      const agents = this.prisma.agents.findUnique({
        where: {
          id,
        },
        include: {
          Persons:{
            include: {
              Addresses: true
            },
          },
        },
      });
      return agents;
    } catch (error) {
      console.log(error);
      throw new ForbiddenException(`Error al buscar agente #${id}`);
    }
  }

  async update(id: number, updateAgentDto: UpdateAgentDto) {
    try {
      const Agent = await this.prisma.persons.update({
        where:{
          email: updateAgentDto.email,
        },
        data: {
          name: updateAgentDto.name,
          lastName: updateAgentDto.lastName,
          email: updateAgentDto.email,
          document: updateAgentDto?.document,
          phone: updateAgentDto?.phone,
          gender: updateAgentDto.gender,
          birthDate: updateAgentDto?.birthDate,
          DocumentTypes: {
            connect: {
              id: updateAgentDto.documentTypeId,
            },
          },
          Addresses: {
            create: {
              cityId: updateAgentDto.cityId,
              street: updateAgentDto?.street,
              residence: updateAgentDto?.residence,
              GPS: updateAgentDto?.GPS,
            },
          },
        },
      });

      console.log(Agent);
      return Agent;
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new ForbiddenException('Error al crear Agente');
        }
      }
      throw error;
    }
  }

  async remove(id: number) {
    try {
      const agents = await this.prisma.persons.delete({
        where: {
          id,
        },
      });

      return agents;
    } catch (error) {
      console.log(error);
      throw new ForbiddenException('Error al remover agentes');
    }
  }
}
