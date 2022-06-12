import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCurrencyDto } from './dto/create-currency.dto';
import { UpdateCurrencyDto } from './dto/update-currency.dto';

@Injectable()
export class CurrenciesService {
  constructor(private prisma: PrismaService) {}

  async create(createCurrencyDto: CreateCurrencyDto) {
    try {
      const currencies = await this.prisma.currencies.create({
        data: {
          name: createCurrencyDto.name,
          symbol: createCurrencyDto.symbol,
        },
      });

      return currencies;
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new ForbiddenException('Error en create currency');
        }
      }
      throw error;
    }
  }

  async findAll() {
    try {
      const currencys = await this.prisma.currencies.findMany();
      return currencys;
    } catch (error) {
      console.log(error);
      throw new ForbiddenException('Error en findAll currency');
    }
  }

  async findOne(id: number) {
    try {
      const currency = await this.prisma.currencies.findUnique({
        where: {
          id,
        },
      });
      return currency;
    } catch (error) {
      console.log(error);
      throw new ForbiddenException('Error en findOne currency');
    }
  }

  async update(id: number, updatecurrencyDto: UpdateCurrencyDto) {
    try {
      const currency = await this.prisma.currencies.update({
        where: {
          id,
        },
        data: {
          name: updatecurrencyDto.name,
          symbol: updatecurrencyDto.symbol,
        },
      });

      return currency;
    } catch (error) {
      console.log(error);
      throw new ForbiddenException('Error en update currency');
    }
  }

  async remove(id: number) {
    try {
      const currency = await this.prisma.currencies.delete({
        where: {
          id,
        },
      });

      return currency;
    } catch (error) {
      console.log(error);
      throw new ForbiddenException('Error en remove currency');
    }
  }
}
