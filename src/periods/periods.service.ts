import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePeriodDto } from './dto/create-period.dto';
import { UpdatePeriodDto } from './dto/update-period.dto';

@Injectable()
export class PeriodsService {
  constructor(private prisma: PrismaService){}

  async create(createPeriodDto: CreatePeriodDto) {
    try{
      const periods = await this.prisma.periods.create({
        data: {
          startDate : createPeriodDto.startDate,
          endDate : createPeriodDto.endDate,
          renewal : createPeriodDto.renewal,
        },
      });

      return periods;
    } catch (error){
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new ForbiddenException('Error en create de periods');
        }
      }
      throw error;
    }
  }

  async findAll() {
    try {
      const periods = await this.prisma.periods.findMany();
      return periods;
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new ForbiddenException(' Error en findAll de periods');
        }
      }
      throw error;
    }
  }

  async findOne(id: number) {
    try {
      const periods = await this.prisma.periods.findUnique({
        where: {
          id,
        },
      });
      return periods;
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new ForbiddenException('Error en FindOne de periods');
        }
      }
      throw error;
    }
  }

  async update(id: number, updatePeriodsDto: UpdatePeriodDto) {
    try {
      const periods = await this.prisma.periods.update({
        where: {
          id,
        },
        data: {
          startDate : updatePeriodsDto.startDate,
          endDate : updatePeriodsDto.endDate,
          renewal : updatePeriodsDto.renewal,
        },
      });

      return periods;
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new ForbiddenException('Error en Update de periods');
        }
      }
      throw error;
    }
  }

  async remove(id: number) {
    try {
      const periods = await this.prisma.periods.delete({
        where: {
          id,
        },
      });

      return periods;
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new ForbiddenException('Error en Delete de periods');
        }
      }
      throw error;
    }
  }
}
