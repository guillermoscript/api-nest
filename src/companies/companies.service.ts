import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';

@Injectable()
export class CompaniesService {
  constructor(private prisma: PrismaService) {}

  async create(CreateCompanyDto: CreateCompanyDto) {
    try {
      const company = await this.prisma.companies.create({
        data: {
          document: CreateCompanyDto.document,
          socialReason: CreateCompanyDto.socialReason,
          economicActivity: CreateCompanyDto.economicActivity,
          webPage: CreateCompanyDto.webPage,
        },
      });

      return company;
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new ForbiddenException(
            'Error en create company: documento debe ser unico',
          );
        }
      }
      throw error;
    }
  }

  async findAll() {
    try {
      const companies = await this.prisma.companies.findMany();
      return companies;
    } catch (error) {
      console.log(error);
      throw new ForbiddenException('Error en findAll company');
    }
  }

  async findOne(id: number) {
    try {
      const company = await this.prisma.companies.findUnique({
        where: {
          id,
        },
      });
      return company;
    } catch (error) {
      console.log(error);
      throw new ForbiddenException('Error en findOne company');
    }
  }

  async update(id: number, updatecompanyDto: UpdateCompanyDto) {
    try {
      const company = await this.prisma.companies.update({
        where: {
          id,
        },
        data: {
          document: updatecompanyDto.document,
          socialReason: updatecompanyDto.socialReason,
          economicActivity: updatecompanyDto.economicActivity,
          webPage: updatecompanyDto.webPage,
        },
      });

      return company;
    } catch (error) {
      console.log(error);
      throw new ForbiddenException('Error en update company');
    }
  }

  async remove(id: number) {
    try {
      const company = await this.prisma.companies.delete({
        where: {
          id,
        },
      });

      return company;
    } catch (error) {
      console.log(error);
      throw new ForbiddenException('Error en remove company');
    }
  }
}
