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
          Periods: {
            create: {
              startDate: createPolicyDto.periodStartDate,
              endDate: createPolicyDto.periodEndDate,
              renewal: createPolicyDto.renewal,
            },
          },
          AgentContracts: {
            create: {
              agentId: createPolicyDto.agentId,
            },
          },
          EntitiesHasPolizas: {
            create: {
              relationId: 1,
              clientId: createPolicyDto.clientId,
              ClientHasTomadors: {
                create: {
                  OrderDetails: {
                    create: {
                      primeValue: createPolicyDto.primeValue,
                      AnnexValue: createPolicyDto.AnnexValue,
                      comission: createPolicyDto.comission,
                      comissionPolicyStatus: createPolicyDto.comissionPolicyStatus,
                      ValorFinalizacion: createPolicyDto.ValorFinalizacion,
                      Total: createPolicyDto.Total,
                      Currencies: {
                        connect: {
                          id: createPolicyDto.currencyId,
                        },
                      },
                      Periodicities: {
                        connect: {
                          id: createPolicyDto.periodicityId,
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      });
      return policy;
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new ForbiddenException('Hubo un error en la creacion de la poliza, intentelo de nuevo');
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
