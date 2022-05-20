  import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { PrismaService } from 'src/prisma/prisma.service';
  import { CreateCountryStateDto } from './dto/create-country-state.dto';
  import { UpdateCountryStateDto } from './dto/update-country-state.dto';
  
  @Injectable()
  export class CountryStatesService {
    constructor(private prisma: PrismaService) {}
  
    async create(CreateCountryStateDto: CreateCountryStateDto) {
      try {
        const countryState = await this.prisma.countryStates.create({
          data: {
            name : CreateCountryStateDto.name,
            Countries: {
              connect:{
                id: CreateCountryStateDto.countryId,
              },
            },
          },
        });
  
        return countryState;
      } catch (error) {
        if (error instanceof PrismaClientKnownRequestError) {
          if (error.code === 'P2002') {
            throw new ForbiddenException('Error en create countryState: nombre debe ser unico');
          }
        }
        throw error;
      }
    }
  
    async findAll() {
      try {
        const countryState = await this.prisma.countryStates.findMany();
        return countryState;
      } catch (error) {
        console.log(error);
        throw new ForbiddenException('Error en findAll countryState');
      }
    }
  
    async findOne(id: number) {
      try {
        const countryState = await this.prisma.countryStates.findUnique({
          where: {
            id,
          },
        });
        return countryState;
      } catch (error) {
        console.log(error);
        throw new ForbiddenException('Error en findOne countryState');
      }
    }
  
    async update(
      id: number,
      updatecountryStateDto: UpdateCountryStateDto,
    ) {
      try {
        const countryState = await this.prisma.countryStates.update({
          where: {
            id,
          },
          data: {
            name: updatecountryStateDto.name,
          },
        });
  
        return countryState;
      } catch (error) {
        console.log(error);
        throw new ForbiddenException('Error en update countryState');
      }
    }
  
    async remove(id: number) {
      try {
        const countryState = await this.prisma.countryStates.delete({
          where: {
            id,
          },
        });
  
        return countryState;
      } catch (error) {
        console.log(error);
        throw new ForbiddenException('Error en remove countryState');
      }
    }
  }