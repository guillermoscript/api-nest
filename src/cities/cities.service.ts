  import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { PrismaService } from 'src/prisma/prisma.service';
  import { CreateCityDto } from './dto/create-city.dto';
  import { UpdateCityDto } from './dto/update-city.dto';
  
  @Injectable()
  export class CitiesService {
    
    constructor(private prisma: PrismaService) {}

    async create(CreateCityDto: CreateCityDto) {
      try {
        const City = await this.prisma.cities.create({
          data: {
            name: CreateCityDto.name,
            CountryStates: {
              connect:{
                id: CreateCityDto.countryStateId,
              },
            },
          },
        });
  
        return City;
      } catch (error) {
        if (error instanceof PrismaClientKnownRequestError) {
          if (error.code === 'P2002') {
            throw new ForbiddenException('Error en create City: nombre debe ser unico');
          }
        }
        throw error;
      }
    }
  
    async findAll() {
      try {
        const cities = await this.prisma.cities.findMany();
        return cities;
      } catch (error) {
        console.log(error);
        throw new ForbiddenException('Error en findAll City');
      }
    }
  
    async findOne(id: number) {
      try {
        const City = await this.prisma.cities.findUnique({
          where: {
            id,
          },
        });
        return City;
      } catch (error) {
        console.log(error);
        throw new ForbiddenException('Error en findOne City');
      }
    }
  
    async update(
      id: number,
      updateCityDto: UpdateCityDto,
    ) {
      try {
        const City = await this.prisma.cities.update({
          where: {
            id,
          },
          data: {
            name: updateCityDto.name,
          },
        });
  
        return City;
      } catch (error) {
        console.log(error);
        throw new ForbiddenException('Error en update City');
      }
    }
  
    async remove(id: number) {
      try {
        const City = await this.prisma.cities.delete({
          where: {
            id,
          },
        });
  
        return City;
      } catch (error) {
        console.log(error);
        throw new ForbiddenException('Error en remove City');
      }
    }
  }