import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateInsuranceCarrierDto } from './dto/create-insurance-carrier.dto';
import { UpdateInsuranceCarrierDto } from './dto/update-insurance-carrier.dto';

@Injectable()
export class InsuranceCarrierService {
  constructor(private prisma: PrismaService) {}

  async create(createInsuranceCarrierDto: CreateInsuranceCarrierDto) {
    try {
      const insuranceCarrier = await this.prisma.insuranceCarriers.create({
        data: {
          name: createInsuranceCarrierDto.name,
          phone: createInsuranceCarrierDto.phone,
          email: createInsuranceCarrierDto.email,
          document: createInsuranceCarrierDto.document,
          account: createInsuranceCarrierDto?.account,
          paymentLink: createInsuranceCarrierDto?.paymentLink,
        },
      });

      return insuranceCarrier;
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new ForbiddenException('El RIF ingresado ya existe');
        }
      }
      throw error;
    }
  }

  async findAll() {
    try {
      const insuranceCarriers = await this.prisma.insuranceCarriers.findMany({
        orderBy: {
          id: 'asc'
        },
      });
      return insuranceCarriers;
    } catch (error) {
      console.log(error);
      throw new ForbiddenException('No se pudo obtener los datos');
    }
  }

  async findOne(id: number) {
    try {
      const insuranceCarrier = await this.prisma.insuranceCarriers.findUnique({
        where: {
          id,
        },
      });
      return insuranceCarrier;
    } catch (error) {
      console.log(error);
      throw new ForbiddenException('No se pudo obtener la aseguradora');
    }
  }

  async update(
    id: number,
    updateInsuranceCarrierDto: UpdateInsuranceCarrierDto,
  ) {
    try {
      const insuranceCarrier = await this.prisma.insuranceCarriers.update({
        where: {
          id,
        },
        data: {
          name: updateInsuranceCarrierDto?.name,
          phone: updateInsuranceCarrierDto?.phone,
          email: updateInsuranceCarrierDto?.email,
          document: updateInsuranceCarrierDto?.document,
          account: updateInsuranceCarrierDto?.account,
          paymentLink: updateInsuranceCarrierDto?.paymentLink,
        },
      });

      return insuranceCarrier;
    } catch (error) {
      console.log(error);
      throw new ForbiddenException('El RIF ingresado ya existe');
    }
  }

  async remove(id: number) {
    try {
      const insuranceCarrier = await this.prisma.insuranceCarriers.delete({
        where: {
          id,
        },
      });

      return insuranceCarrier;
    } catch (error) {
      console.log(error);
      throw new ForbiddenException('No se pudo eliminar la Aseguradora');
    }
  }
}
