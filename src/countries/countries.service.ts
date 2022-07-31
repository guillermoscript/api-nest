  import { ForbiddenException, Injectable } from '@nestjs/common';
  import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
  import { PrismaService } from 'src/prisma/prisma.service';
  import { CreateCountryDto } from './dto/create-country.dto';
  import { UpdateCountryDto } from './dto/update-country.dto';
  
  @Injectable()
  export class CountriesService {
    constructor(private prisma: PrismaService) {}

    async create(CreateCountryDto: CreateCountryDto) {
      try {
        const country = await this.prisma.countries.create({
          data: {
            countryName: CreateCountryDto.countryName,
            Continents: {
              connect:{
                id: CreateCountryDto.continentId,
              },
            },
          },
        });
  
        return country;
      } catch (error) {
        if (error instanceof PrismaClientKnownRequestError) {
          if (error.code === 'P2002') {
            throw new ForbiddenException('Error en create country: nombre debe ser unico');
          }
        }
        throw error;
      }
    }
  
    async findAll() {
      try {
        const countries = await this.prisma.countries.findMany();
        return countries;
      } catch (error) {
        console.log(error);
        throw new ForbiddenException('Error en findAll country');
      }
    }
  
    async findOne(id: number) {
      try {
        const country = await this.prisma.countries.findUnique({
          where: {
            id,
          },
        });
        return country;
      } catch (error) {
        console.log(error);
        throw new ForbiddenException('Error en findOne country');
      }
    }
  
    async update(
      id: number,
      updatecountryDto: UpdateCountryDto,
    ) {
      try {
        const country = await this.prisma.countries.update({
          where: {
            id,
          },
          data: {
            countryName: updatecountryDto.countryName,
          },
        });
  
        return country;
      } catch (error) {
        console.log(error);
        throw new ForbiddenException('Error en update country');
      }
    }
  
    async remove(id: number) {
      try {
        const country = await this.prisma.countries.delete({
          where: {
            id,
          },
        });
  
        return country;
      } catch (error) {
        console.log(error);
        throw new ForbiddenException('Error en remove country');
      }
    }
  }