import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { UpdatePaymentDto } from './dto/update-payment.dto';

@Injectable()
export class PaymentsService {
  constructor(private prisma: PrismaService) {}

  async create(CreatePaymentDto: CreatePaymentDto) {
    try {
      const payment = await this.prisma.payments.create({
        data: {
          receiptNumber: CreatePaymentDto.receiptNumber,
          paymentValue: CreatePaymentDto.paymentValue,
          paymentDate: CreatePaymentDto.paymentDate,
          comissionDate: CreatePaymentDto.comissionDate,
          OrderDetails: {
            connect: {
              id: CreatePaymentDto.orderDetailsId,
            },
          },
        },
      });

      return payment;
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new ForbiddenException('Error en create payment');
        }
      }
      throw error;
    }
  }

  async findAll() {
    try {
      const payments = await this.prisma.payments.findMany();
      return payments;
    } catch (error) {
      console.log(error);
      throw new ForbiddenException('Error en findAll payment');
    }
  }

  async findOne(id: number) {
    try {
      const payment = await this.prisma.payments.findUnique({
        where: {
          id,
        },
      });
      return payment;
    } catch (error) {
      console.log(error);
      throw new ForbiddenException('Error en findOne payment');
    }
  }

  async update(id: number, updatepaymentDto: UpdatePaymentDto) {
    try {
      const payment = await this.prisma.payments.update({
        where: {
          id,
        },
        data: {
          receiptNumber: updatepaymentDto.receiptNumber,
          paymentValue: updatepaymentDto.paymentValue,
          paymentDate: updatepaymentDto.paymentDate,
          comissionDate: updatepaymentDto.comissionDate,
          OrderDetails: {
            connect: {
              id: updatepaymentDto.orderDetailsId,
            },
          },
        },
      });

      return payment;
    } catch (error) {
      console.log(error);
      throw new ForbiddenException('Error en update payment');
    }
  }

  async remove(id: number) {
    try {
      const payment = await this.prisma.payments.delete({
        where: {
          id,
        },
      });

      return payment;
    } catch (error) {
      console.log(error);
      throw new ForbiddenException('Error en remove payment');
    }
  }
}
