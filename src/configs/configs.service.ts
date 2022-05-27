import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateConfigDto } from './dto/create-config.dto';
import { UpdateConfigDto } from './dto/update-config.dto';

@Injectable()
export class ConfigsService {
  constructor(private prisma: PrismaService) {}

  async create(createConfigDto: CreateConfigDto) {
    try {
      const config = await this.prisma.configs.create({
        data: {
          key: createConfigDto.key,
          value: createConfigDto.value,
        },
      });

      return config;
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new ForbiddenException('Error en create config');
        }
      }
      throw error;
    }
  }

  async findAll() {
    try {
      const configs = await this.prisma.configs.findMany();
      return configs;
    } catch (error) {
      console.log(error);
      throw new ForbiddenException('Error en findAll config');
    }
  }

  async findOne(id: number) {
    try {
      const config = await this.prisma.configs.findUnique({
        where: {
          id,
        },
      });
      return config;
    } catch (error) {
      console.log(error);
      throw new ForbiddenException('Error en findOne config');
    }
  }

  async update(id: number, updateconfigDto: UpdateConfigDto) {
    try {
      const config = await this.prisma.configs.update({
        where: {
          id,
        },
        data: {
          key: updateconfigDto.key,
          value: updateconfigDto.value,
        },
      });

      return config;
    } catch (error) {
      console.log(error);
      throw new ForbiddenException('Error en update config');
    }
  }

  async remove(id: number) {
    try {
      const config = await this.prisma.configs.delete({
        where: {
          id,
        },
      });

      return config;
    } catch (error) {
      console.log(error);
      throw new ForbiddenException('Error en remove config');
    }
  }
}
