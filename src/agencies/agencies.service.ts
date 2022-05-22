  import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
  import { PrismaService } from 'src/prisma/prisma.service';
  import { CreateAgencyDto } from './dto/create-agency.dto';
  import { UpdateAgencyDto } from './dto/update-agency.dto';
  
  @Injectable()
  export class AgenciesService {
    constructor(private prisma: PrismaService){}
    
    async create(createAgencyDto: CreateAgencyDto) {
      try {
        const agencies = await this.prisma.agencies.create({
          data: {
            document : createAgencyDto.document,
            name : createAgencyDto.name,
            phone : createAgencyDto.phone,
            email : createAgencyDto.email,
          },
        });
  
        return agencies;
      } catch (error) {
        if (error instanceof PrismaClientKnownRequestError) {
          if (error.code === 'P2002') {
            throw new ForbiddenException(' Error en create Agencies');
          }
        }
        throw error;
      }    }
  
      async findAll() {
        try {
          const agencies = await this.prisma.agencies.findMany();
          return agencies;
        } catch (error) {
          console.log(error);
          throw new ForbiddenException('Error en findAll Agencies');
        }
      }
    
      async findOne(id: number) {
        try {
          const agencies = await this.prisma.agencies.findUnique({
            where: {
              id,
            },
          });
          return agencies;
        } catch (error) {
          console.log(error);
          throw new ForbiddenException('Error en findOne agency');
        }
      }
    
      async update(
        id: number,
        UpdateAgencyDto: UpdateAgencyDto,
      ) {
        try {
          const agencies = await this.prisma.agencies.update({
            where: {
              id,
            },
            data: {
              document : UpdateAgencyDto.document,
              name : UpdateAgencyDto.name,
              phone : UpdateAgencyDto.phone,
              email : UpdateAgencyDto.email,
            },
          });
    
          return agencies;
        } catch (error) {
          console.log(error);
          throw new ForbiddenException('Error en update agencies');
        }
      }
    
      async remove(id: number) {
        try {
          const agencies = await this.prisma.agencies.delete({
            where: {
              id,
            },
          });
    
          return agencies;
        } catch (error) {
          console.log(error);
          throw new ForbiddenException('Error en remove agencies');
        }
      }
    }
    