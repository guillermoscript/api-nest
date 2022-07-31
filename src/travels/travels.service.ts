  import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { PrismaService } from 'src/prisma/prisma.service';
  import { CreateTravelDto } from './dto/create-travel.dto';
  import { UpdateTravelDto } from './dto/update-travel.dto';
  
  @Injectable()
  export class TravelsService {
    constructor(private prisma: PrismaService) {}

    async create(CreateTravelDto: CreateTravelDto) {
      try {
        const travel = await this.prisma.travels.create({
          data: {
            startDate: CreateTravelDto.startDate,
            endDate: CreateTravelDto.endDate,
            Countries_CountriesToTravels_startCountry: {
              connect: {
                id: CreateTravelDto.startCountry,
              },
            },
            Countries_CountriesToTravels_endCountry: {
              connect:{
                id: CreateTravelDto.endCountry,
              },
            },
            Policies:{
              connect:{
                id: CreateTravelDto.policyId,
              },
            },
          },
        });
  
        return travel;
      } catch (error) {
        if (error instanceof PrismaClientKnownRequestError) {
          if (error.code === 'P2002') {
            throw new ForbiddenException('Error en create travel: documento debe ser unico');
          }
        }
        throw error;
      }
    }
  
    async findAll() {
      try {
        const travels = await this.prisma.travels.findMany();
        return travels;
      } catch (error) {
        console.log(error);
        throw new ForbiddenException('Error en findAll travel');
      }
    }
  
    async findOne(id: number) {
      try {
        const travel = await this.prisma.travels.findUnique({
          where: {
            id,
          },
        });
        return travel;
      } catch (error) {
        console.log(error);
        throw new ForbiddenException('Error en findOne travel');
      }
    }
  
    async update(
      id: number,
      updatetravelDto: UpdateTravelDto,
    ) {
      try {
        const travel = await this.prisma.travels.update({
          where: {
            id,
          },
          data: {
            startDate: updatetravelDto.startDate,
            endDate: updatetravelDto.endDate,
            Countries_CountriesToTravels_startCountry: {
              connect: {
                id: updatetravelDto.startCountry,
              },
            },
            Countries_CountriesToTravels_endCountry: {
              connect:{
                id: updatetravelDto.endCountry,
              },
            },
            Policies:{
              connect:{
                id: updatetravelDto.policyId,
              },
            },
          },
        });
  
        return travel;
      } catch (error) {
        console.log(error);
        throw new ForbiddenException('Error en update travel');
      }
    }
  
    async remove(id: number) {
      try {
        const travel = await this.prisma.travels.delete({
          where: {
            id,
          },
        });
  
        return travel;
      } catch (error) {
        console.log(error);
        throw new ForbiddenException('Error en remove travel');
      }
    }
  }