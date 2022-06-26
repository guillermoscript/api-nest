import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTaxDto } from './dto/create-tax.dto';
import { UpdateTaxDto } from './dto/update-tax.dto';

@Injectable()
export class TaxesService {
  constructor(private prisma: PrismaService) {}

  async create(createTaxDto: CreateTaxDto) {
    try {
      const tax = await this.prisma.taxes.create({
        data: {
          metakey: createTaxDto.metakey,
          metavalue: createTaxDto.metavalue,
          PolicyDetails: {
            connect: {
              id: createTaxDto.PolicyDetailsId,
            },
          },
        },
      });

      return tax;
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new ForbiddenException('Error en create tax');
        }
      }
      throw error;
    }
  }

  async findAll() {
    try {
      const taxes = await this.prisma.taxes.findMany();
      return taxes;
    } catch (error) {
      console.log(error);
      throw new ForbiddenException('Error en findAll tax');
    }
  }

  async findOne(id: number) {
    try {
      const tax = await this.prisma.taxes.findUnique({
        where: {
          id,
        },
      });
      return tax;
    } catch (error) {
      console.log(error);
      throw new ForbiddenException('Error en findOne tax');
    }
  }

  async update(id: number, updateTaxDto: UpdateTaxDto) {
    try {
      const tax = await this.prisma.taxes.update({
        where: {
          id,
        },
        data: {
          metakey: updateTaxDto.metakey,
          metavalue: updateTaxDto.metavalue,
          PolicyDetails: {
            connect: {
              id: updateTaxDto.PolicyDetailsId,
            },
          },
        },
      });

      return tax;
    } catch (error) {
      console.log(error);
      throw new ForbiddenException('Error en update tax');
    }
  }

  async remove(id: number) {
    try {
      const tax = await this.prisma.taxes.delete({
        where: {
          id,
        },
      });

      return tax;
    } catch (error) {
      console.log(error);
      throw new ForbiddenException('Error en remove tax');
    }
  }
}
