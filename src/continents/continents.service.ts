  import { ForbiddenException, Injectable } from '@nestjs/common';
  import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
  import { PrismaService } from 'src/prisma/prisma.service';
  import { CreateContinentDto } from './dto/create-continent.dto';
  import { UpdateContinentDto } from './dto/update-continent.dto';
  
  @Injectable()
  export class ContinentsService {
    constructor(private prisma: PrismaService) {}

    async create(CreateContinentDto: CreateContinentDto) {
      try {
        const continent = await this.prisma.continents.create({
          data: {
            name: CreateContinentDto.name,
          },
        });
  
        return continent;
      } catch (error) {
        if (error instanceof PrismaClientKnownRequestError) {
          if (error.code === 'P2002') {
            throw new ForbiddenException(' Error en create continent: nombre debe ser unico');
          }
        }
        throw error;
      }
    }
  
    async findAll() {
      try {
        const continents = await this.prisma.continents.findMany();
        return continents;
      } catch (error) {
        console.log(error);
        throw new ForbiddenException('Error en findAll continents');
      }
    }
  
    async findOne(id: number) {
      try {
        const continent = await this.prisma.continents.findUnique({
          where: {
            id,
          },
        });
        return continent;
      } catch (error) {
        console.log(error);
        throw new ForbiddenException('Error en findOne continents');
      }
    }
  
    async update(
      id: number,
      updatecontinentDto: UpdateContinentDto,
    ) {
      try {
        const continent = await this.prisma.continents.update({
          where: {
            id,
          },
          data: {
            name: updatecontinentDto?.name,
          },
        });
  
        return continent;
      } catch (error) {
        console.log(error);
        throw new ForbiddenException('Error en update continents');
      }
    }
  
    async remove(id: number) {
      try {
        const continent = await this.prisma.continents.delete({
          where: {
            id,
          },
        });
  
        return continent;
      } catch (error) {
        console.log(error);
        throw new ForbiddenException('Error en remove continents');
      }
    }
  }