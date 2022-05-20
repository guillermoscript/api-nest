  import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { PrismaService } from 'src/prisma/prisma.service';
  import { CreatePeriodicityDto } from './dto/create-periodicity.dto';
  import { UpdatePeriodicityDto } from './dto/update-periodicity.dto';
  
  @Injectable()
  export class PeriodicitiesService {
    constructor(private prisma: PrismaService) {}

    async create(CreatePeriodicityDto: CreatePeriodicityDto) {
      try {
        const periodicity = await this.prisma.periodicities.create({
          data: {
            name: CreatePeriodicityDto.name,
          },
        });
  
        return periodicity;
      } catch (error) {
        if (error instanceof PrismaClientKnownRequestError) {
          if (error.code === 'P2002') {
            throw new ForbiddenException('Error en create periodicity: nombre debe ser unico');
          }
        }
        throw error;
      }
    }
  
    async findAll() {
      try {
        const periodicities = await this.prisma.periodicities.findMany();
        return periodicities;
      } catch (error) {
        console.log(error);
        throw new ForbiddenException('Error en findAll periodicity');
      }
    }
  
    async findOne(id: number) {
      try {
        const periodicity = await this.prisma.periodicities.findUnique({
          where: {
            id,
          },
        });
        return periodicity;
      } catch (error) {
        console.log(error);
        throw new ForbiddenException('Error en findOne periodicity');
      }
    }
  
    async update(
      id: number,
      updateperiodicityDto: UpdatePeriodicityDto,
    ) {
      try {
        const periodicity = await this.prisma.periodicities.update({
          where: {
            id,
          },
          data: {
            name: updateperiodicityDto.name,
          },
        });
  
        return periodicity;
      } catch (error) {
        console.log(error);
        throw new ForbiddenException('Error en update periodicity');
      }
    }
  
    async remove(id: number) {
      try {
        const periodicity = await this.prisma.periodicities.delete({
          where: {
            id,
          },
        });
  
        return periodicity;
      } catch (error) {
        console.log(error);
        throw new ForbiddenException('Error en remove periodicity');
      }
    }
  }