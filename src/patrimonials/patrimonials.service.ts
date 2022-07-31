  import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { PrismaService } from 'src/prisma/prisma.service';
  import { CreatePatrimonialDto } from './dto/create-patrimonial.dto';
  import { UpdatePatrimonialDto } from './dto/update-patrimonial.dto';
  
  @Injectable()
  export class PatrimonialsService {
    constructor(private prisma: PrismaService) {}

    async create(CreatePatrimonialDto: CreatePatrimonialDto) {
      try {
        const patrimonial = await this.prisma.patrimonials.create({
          data: {
            type: CreatePatrimonialDto.type,
            totalValue: CreatePatrimonialDto.totalValue,
            machineryValue: CreatePatrimonialDto.machineryValue,
            furnitureValue: CreatePatrimonialDto.furnitureValue,
            Policies: {
              connect: {
                id: CreatePatrimonialDto.policyId,
              },
            },
          },
        });
  
        return patrimonial;
      } catch (error) {
        if (error instanceof PrismaClientKnownRequestError) {
          if (error.code === 'P2002') {
            throw new ForbiddenException('Error en create patrimonial');
          }
        }
        throw error;
      }
    }
  
    async findAll() {
      try {
        const patrimonials = await this.prisma.patrimonials.findMany();
        return patrimonials;
      } catch (error) {
        console.log(error);
        throw new ForbiddenException('Error en findAll patrimonial');
      }
    }
  
    async findOne(id: number) {
      try {
        const patrimonial = await this.prisma.patrimonials.findUnique({
          where: {
            id,
          },
        });
        return patrimonial;
      } catch (error) {
        console.log(error);
        throw new ForbiddenException('Error en findOne patrimonial');
      }
    }
  
    async update(
      id: number,
      updatepatrimonialDto: UpdatePatrimonialDto,
    ) {
      try {
        const patrimonial = await this.prisma.patrimonials.update({
          where: {
            id,
          },
          data: {
            type: updatepatrimonialDto.type,
            totalValue: updatepatrimonialDto.totalValue,
            machineryValue: updatepatrimonialDto.machineryValue,
            furnitureValue: updatepatrimonialDto.furnitureValue,
          },
        });
  
        return patrimonial;
      } catch (error) {
        console.log(error);
        throw new ForbiddenException('Error en update patrimonial');
      }
    }
  
    async remove(id: number) {
      try {
        const patrimonial = await this.prisma.patrimonials.delete({
          where: {
            id,
          },
        });
  
        return patrimonial;
      } catch (error) {
        console.log(error);
        throw new ForbiddenException('Error en remove patrimonial');
      }
    }
  }