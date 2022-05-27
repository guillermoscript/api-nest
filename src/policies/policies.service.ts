import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePolicyDto } from './dto/create-policy.dto';
import { UpdatePolicyDto } from './dto/update-policy.dto';

@Injectable()
export class PoliciesService {
  constructor(private prisma: PrismaService) {}
  async create(createPolicyDto: CreatePolicyDto) {
    try {
      const policy = await this.prisma.policies.create({
        data: {
          policyNum: createPolicyDto.policyNum,
          Risk: createPolicyDto.Risk,
          Renovable: createPolicyDto.Renovable,
          InsuranceCarriers: {
            connect: {
              id: createPolicyDto.insuranceCarrierId,
            },
          },
          BranchTypes: {
            connect: {
              id: createPolicyDto.branchTypeId,
            },
          },
          SubBranchs: {
            connect: {
              id: createPolicyDto.subBranchId,
            },
          },
          PolicyStatus: {
            connect: {
              id: createPolicyDto.policyStatusId,
            },
          },
        },
      });

      return policy;
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new ForbiddenException(' Aye Mateee that email is mine ya');
        }
      }
      throw error;
    }
  }

  async findAll() {
    return `This action returns all policies`;
  }

  async findOne(id: number) {
    return `This action returns a #${id} policy`;
  }

  async update(id: number, updatePolicyDto: UpdatePolicyDto) {
    return `This action updates a #${id} policy`;
  }

  async remove(id: number) {
    return `This action removes a #${id} policy`;
  }
}
