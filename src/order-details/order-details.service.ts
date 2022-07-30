import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateOrderDetailDto } from './dto/create-order-detail.dto';
import { UpdateOrderDetailDto } from './dto/update-order-detail.dto';

@Injectable()
export class PolicyDetailsService {
  constructor(private prisma: PrismaService) {}

  async create(CreateOrderDetailDto: CreateOrderDetailDto) {
    try {
      const orderDetail = await this.prisma.policyDetails.create({
        data: {
          primeValue: CreateOrderDetailDto.primeValue,
          AnnexValue: CreateOrderDetailDto.AnnexValue,
          ValorFinalizacion: CreateOrderDetailDto.ValorFinalizacion,
          Total: CreateOrderDetailDto.Total,
          Periodicities: {
            connect: {
              id: CreateOrderDetailDto.periodicityId,
            },
          },
          Policies:{
            connect:{
              id: CreateOrderDetailDto.policyId,
            },
          },
        },
      });

      return orderDetail;
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new ForbiddenException('Error en create orderDetail');
        }
      }
      throw error;
    }
  }

  async findAll() {
    try {
      const policyDetails = await this.prisma.policyDetails.findMany();
      return policyDetails;
    } catch (error) {
      console.log(error);
      throw new ForbiddenException('Error en findAll orderDetail');
    }
  }

  async findOne(id: number) {
    try {
      const orderDetail = await this.prisma.policyDetails.findUnique({
        where: {
          id,
        },
      });
      return orderDetail;
    } catch (error) {
      console.log(error);
      throw new ForbiddenException('Error en findOne orderDetail');
    }
  }

  async update(id: number, updateorderDetailDto: UpdateOrderDetailDto) {
    try {
      const orderDetail = await this.prisma.policyDetails.update({
        where: {
          id,
        },
        data: {
          primeValue: updateorderDetailDto.primeValue,
          AnnexValue: updateorderDetailDto.AnnexValue,
          ValorFinalizacion: updateorderDetailDto.ValorFinalizacion,
          Total: updateorderDetailDto.Total,
          Policies:{
            connect:{
              id: updateorderDetailDto.policyId,
            },
          },
          Periodicities: {
            connect: {
              id: updateorderDetailDto.periodicityId,
            },
          },
        },
      });

      return orderDetail;
    } catch (error) {
      console.log(error);
      throw new ForbiddenException('Error en update orderDetail');
    }
  }

  async remove(id: number) {
    try {
      const orderDetail = await this.prisma.policyDetails.delete({
        where: {
          id,
        },
      });

      return orderDetail;
    } catch (error) {
      console.log(error);
      throw new ForbiddenException('Error en remove orderDetail');
    }
  }
}
