import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePolicyStatusDto } from './dto/create-policy-status.dto';
import { UpdatePolicyStatusDto } from './dto/update-policy-status.dto';

@Injectable()
export class PolicyStatusService {
  constructor(private prisma: PrismaService) {}

  async create(createPolicyStatusDto: CreatePolicyStatusDto) {
    try {
      const policyStatus = await this.prisma.policyStatus.create({
        data: {
          ...createPolicyStatusDto,
        },
      });
      return policyStatus;
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new ForbiddenException(' Aye Mateee thats an error xd');
        }
      }
      throw error;
    }
  }

  async findAll() {
    try {
      const policyStatus = await this.prisma.policyStatus.findMany();
      return policyStatus;
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new ForbiddenException(' Aye Mateee thats an error xd');
        }
      }
      throw error;
    }
  }

  async findOne(id: number) {
    try {
      const policyStatus = await this.prisma.policyStatus.findUnique({
        where: {
          id,
        },
      });
      return policyStatus;
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new ForbiddenException(' Aye Mateee thats an error xd');
        }
      }
      throw error;
    }
  }

  async update(id: number, updatePolicyStatusDto: UpdatePolicyStatusDto) {
    try {
      const policyStatus = await this.prisma.policyStatus.update({
        where: {
          id,
        },
        data: {
          ...updatePolicyStatusDto,
        },
      });
      return policyStatus;
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new ForbiddenException(' Aye Mateee thats an error xd');
        }
      }
      throw error;
    }
  }

  async remove(id: number) {
    try {
      const policyStatus = await this.prisma.policyStatus.delete({
        where: {
          id,
        },
      });
      return policyStatus;
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new ForbiddenException(' Aye Mateee thats an error xd');
        }
      }
      throw error;
    }
  }
}
