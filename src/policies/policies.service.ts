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
      const result = await this.prisma.$transaction(
        async (newPrisma: any) => {
          const policy = await newPrisma.policies.create({
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
          const entitiesHasPolizas = await newPrisma.entitiesHasPolizas.create({
            data: {
              policyId: policy.id,
              client: [createPolicyDto.clients],
            },
          });
          const clientHasTomadors = await newPrisma.clientHasTomadors.create({
            data: {
              EntitiesHasPolizas: {
                connect: {
                  id: entitiesHasPolizas.id,
                },
              },
            },
          });
          const orderDetails = await newPrisma.orderDetails.create({
            data: {
              primeValue: createPolicyDto.primeValue,
              AnnexValue: createPolicyDto.AnnexValue,
              comission: createPolicyDto.comission,
              comissionPolicyStatus: createPolicyDto.comissionPolicyStatus,
              ValorFinalizacion: createPolicyDto.ValorFinalizacion,
              Total: createPolicyDto.Total,
              ClientHasTomadors: {
                connect: {
                  id: clientHasTomadors.id,
                },
              },
              Periodicities: {
                connect: {
                  id: createPolicyDto.periodicityId,
                },
              },
              Currencies: {
                connect: {
                  id: createPolicyDto.currencyId,
                },
              },
            },
          });
          return true;
        },
      );
      return result;
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
