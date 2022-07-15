import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePolicyClientDto } from './dto/create-policy-client.dto';
import { CreatePolicyPatrimonialDto } from './dto/create-policy-patrimonial.dto';
import { CreatePolicyTravelDto } from './dto/create-policy-travel.dto';
import { CreatePolicyVehicleDto } from './dto/create-policy-vehicle.dto';
import { UpdatePolicyClientDto } from './dto/update-policy-client.dto';
import { UpdatePolicyPatrimonialDto } from './dto/update-policy-patrimonial.dto';
import { UpdatePolicyTravelDto } from './dto/update-policy-travel.dto';
import { UpdatePolicyVehicleDto } from './dto/update-policy-vehicle.dto';

@Injectable()
export class PoliciesService {
  constructor(private prisma: PrismaService) {}
  async createPolicyClient(createPolicyClientDto: CreatePolicyClientDto) {
    try {
      const policy = await this.prisma.policies.create({
        data: {
          policyNum: createPolicyClientDto.policyNum,
          Risk: createPolicyClientDto.Risk,
          Renovable: createPolicyClientDto.Renovable,
          insuredValue: createPolicyClientDto.insuredValue,
          InsuranceCarriers: {
            connect: {
              id: createPolicyClientDto.insuranceCarrierId,
            },
          },
          BranchTypes: {
            connect: {
              id: createPolicyClientDto.branchTypeId,
            },
          },
          SubBranchs: {
            connect: {
              id: createPolicyClientDto.subBranchId,
            },
          },
          PolicyStatus: {
            connect: {
              id: createPolicyClientDto.policyStatusId,
            },
          },
          Periods: {
            create: {
              startDate: createPolicyClientDto.periodStartDate,
              endDate: createPolicyClientDto.periodEndDate,
              renewal: createPolicyClientDto.renewal,
            },
          },
          AgentContracts: {
            create: {
              agentId: createPolicyClientDto.agentId,
            },
          },
          ClientHasPolicies: {
            create: {
              relationId: 1,
              clientId: createPolicyClientDto.clientId,
              ClientHasTaker: {
                create: {
                  PolicyDetails: {
                    create: {
                      primeValue: createPolicyClientDto.primeValue,
                      AnnexValue: createPolicyClientDto.AnnexValue,
                      comission: createPolicyClientDto.comission,
                      comissionPolicyStatus:
                        createPolicyClientDto.comissionPolicyStatus,
                      ValorFinalizacion:
                        createPolicyClientDto.ValorFinalizacion,
                      Total: createPolicyClientDto.Total,
                      Currencies: {
                        connect: {
                          id: createPolicyClientDto.currencyId,
                        },
                      },
                      Periodicities: {
                        connect: {
                          id: createPolicyClientDto.periodicityId,
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
          throw new ForbiddenException(
            'Error, el numero de poliza ingresado ya existe',
          );
        }
      }
      throw error;
    }
  }

  async createPolicyVehicle(createPolicyVehicleDto: CreatePolicyVehicleDto) {
    try {
      const policy = await this.prisma.policies.create({
        data: {
          policyNum: createPolicyVehicleDto.policyNum,
          Risk: createPolicyVehicleDto.Risk,
          Renovable: createPolicyVehicleDto.Renovable,
          insuredValue: createPolicyVehicleDto.insuredValue,
          Vehicles: {
            create: {
              brand: createPolicyVehicleDto.brand,
              class: createPolicyVehicleDto.class,
              model: createPolicyVehicleDto.model,
              vehicleType: createPolicyVehicleDto.vehicleType,
              serviceType: createPolicyVehicleDto.serviceType,
              gasConverted: createPolicyVehicleDto.gasConverted,
              vehicleAge: createPolicyVehicleDto.vehicleAge,
            },
          },
          InsuranceCarriers: {
            connect: {
              id: createPolicyVehicleDto.insuranceCarrierId,
            },
          },
          BranchTypes: {
            connect: {
              id: createPolicyVehicleDto.branchTypeId,
            },
          },
          SubBranchs: {
            connect: {
              id: createPolicyVehicleDto.subBranchId,
            },
          },
          PolicyStatus: {
            connect: {
              id: createPolicyVehicleDto.policyStatusId,
            },
          },
          Periods: {
            create: {
              startDate: createPolicyVehicleDto.periodStartDate,
              endDate: createPolicyVehicleDto.periodEndDate,
              renewal: createPolicyVehicleDto.renewal,
            },
          },
          AgentContracts: {
            create: {
              agentId: createPolicyVehicleDto.agentId,
            },
          },
          ClientHasPolicies: {
            create: {
              relationId: 1,
              clientId: createPolicyVehicleDto.clientId,
              ClientHasTaker: {
                create: {
                  PolicyDetails: {
                    create: {
                      primeValue: createPolicyVehicleDto.primeValue,
                      AnnexValue: createPolicyVehicleDto.AnnexValue,
                      comission: createPolicyVehicleDto.comission,
                      comissionPolicyStatus:
                        createPolicyVehicleDto.comissionPolicyStatus,
                      ValorFinalizacion:
                        createPolicyVehicleDto.ValorFinalizacion,
                      Total: createPolicyVehicleDto.Total,
                      Currencies: {
                        connect: {
                          id: createPolicyVehicleDto.currencyId,
                        },
                      },
                      Periodicities: {
                        connect: {
                          id: createPolicyVehicleDto.periodicityId,
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
          throw new ForbiddenException(
            'Error, El numero de poliza debe ser, intentelo de nuevo',
          );
        }
      }
      throw error;
    }
  }

  async createPolicyPatrimonial(
    createPolicyPatrimonialDto: CreatePolicyPatrimonialDto,
  ) {
    try {
      const policy = await this.prisma.policies.create({
        data: {
          policyNum: createPolicyPatrimonialDto.policyNum,
          Risk: createPolicyPatrimonialDto.Risk,
          Renovable: createPolicyPatrimonialDto.Renovable,
          insuredValue: createPolicyPatrimonialDto.insuredValue,
          Patrimonials: {
            create: {
              type: createPolicyPatrimonialDto.type,
              totalValue: createPolicyPatrimonialDto.totalValue,
              machineryValue: createPolicyPatrimonialDto.machineryValue,
              furnitureValue: createPolicyPatrimonialDto.furnitureValue,
            },
          },
          InsuranceCarriers: {
            connect: {
              id: createPolicyPatrimonialDto.insuranceCarrierId,
            },
          },
          BranchTypes: {
            connect: {
              id: createPolicyPatrimonialDto.branchTypeId,
            },
          },
          SubBranchs: {
            connect: {
              id: createPolicyPatrimonialDto.subBranchId,
            },
          },
          PolicyStatus: {
            connect: {
              id: createPolicyPatrimonialDto.policyStatusId,
            },
          },
          Periods: {
            create: {
              startDate: createPolicyPatrimonialDto.periodStartDate,
              endDate: createPolicyPatrimonialDto.periodEndDate,
              renewal: createPolicyPatrimonialDto.renewal,
            },
          },
          AgentContracts: {
            create: {
              agentId: createPolicyPatrimonialDto.agentId,
            },
          },
          ClientHasPolicies: {
            create: {
              relationId: 1,
              clientId: createPolicyPatrimonialDto.clientId,
              ClientHasTaker: {
                create: {
                  PolicyDetails: {
                    create: {
                      primeValue: createPolicyPatrimonialDto.primeValue,
                      AnnexValue: createPolicyPatrimonialDto.AnnexValue,
                      comission: createPolicyPatrimonialDto.comission,
                      comissionPolicyStatus:
                        createPolicyPatrimonialDto.comissionPolicyStatus,
                      ValorFinalizacion:
                        createPolicyPatrimonialDto.ValorFinalizacion,
                      Total: createPolicyPatrimonialDto.Total,
                      Currencies: {
                        connect: {
                          id: createPolicyPatrimonialDto.currencyId,
                        },
                      },
                      Periodicities: {
                        connect: {
                          id: createPolicyPatrimonialDto.periodicityId,
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
          throw new ForbiddenException(
            'Error, El numero de poliza ingresado ya existe',
          );
        }
      }
      throw error;
    }
  }

  async createPolicyTravel(createPolicyTravelDto: CreatePolicyTravelDto) {
    try {
      const policy = await this.prisma.policies.create({
        data: {
          policyNum: createPolicyTravelDto.policyNum,
          Risk: createPolicyTravelDto.Risk,
          Renovable: createPolicyTravelDto.Renovable,
          insuredValue: createPolicyTravelDto.insuredValue,
          Travels: {
            create: {
              startCountry: createPolicyTravelDto.startCountry,
              endCountry: createPolicyTravelDto.endCountry,
              startDate: createPolicyTravelDto.startDate,
              endDate: createPolicyTravelDto.endDate,
            },
          },
          InsuranceCarriers: {
            connect: {
              id: createPolicyTravelDto.insuranceCarrierId,
            },
          },
          BranchTypes: {
            connect: {
              id: createPolicyTravelDto.branchTypeId,
            },
          },
          SubBranchs: {
            connect: {
              id: createPolicyTravelDto.subBranchId,
            },
          },
          PolicyStatus: {
            connect: {
              id: createPolicyTravelDto.policyStatusId,
            },
          },
          Periods: {
            create: {
              startDate: createPolicyTravelDto.periodStartDate,
              endDate: createPolicyTravelDto.periodEndDate,
              renewal: createPolicyTravelDto.renewal,
            },
          },
          AgentContracts: {
            create: {
              agentId: createPolicyTravelDto.agentId,
            },
          },
          ClientHasPolicies: {
            create: {
              relationId: 1,
              clientId: createPolicyTravelDto.clientId,
              ClientHasTaker: {
                create: {
                  PolicyDetails: {
                    create: {
                      primeValue: createPolicyTravelDto.primeValue,
                      AnnexValue: createPolicyTravelDto.AnnexValue,
                      comission: createPolicyTravelDto.comission,
                      comissionPolicyStatus:
                        createPolicyTravelDto.comissionPolicyStatus,
                      ValorFinalizacion:
                        createPolicyTravelDto.ValorFinalizacion,
                      Total: createPolicyTravelDto.Total,
                      Currencies: {
                        connect: {
                          id: createPolicyTravelDto.currencyId,
                        },
                      },
                      Periodicities: {
                        connect: {
                          id: createPolicyTravelDto.periodicityId,
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
          throw new ForbiddenException(
            'Error, El numero de poliza ingresado ya existe',
          );
        }
      }
      throw error;
    }
  }

  async findAll() {
    try {
      const policies = await this.prisma.policies.findMany();
      return policies;
    } catch (error) {
      console.log(error);
      throw new ForbiddenException('Error al buscar Polizas');
    }
  }

  async findOne(id: number) {
    try {
      const policies = await this.prisma.policies.findUnique({
        include: {
          ClientHasPolicies: {
            include: {
              ClientHasTaker: {
                include : {
                  PolicyDetails: {
                    include: {
                      Currencies: true,
                      Periodicities: true,
                      Payments: true,
                    },
                  },
                },
              },
            },
          },
          BranchTypes: true,
          SubBranchs: true,
          AgentContracts: true,
          Vehicles: true,
          Travels: true,
          Patrimonials: true,
          Periods: true,

        },
        where: {
          id,
        },
        include: {
          ClientHasPolicies: {
            include: {
              ClientHasTaker: {
                include: {
                  PolicyDetails: {
                    include: {
                      Periodicities: true,
                    },
                  },
                },
              },
            },
          },
          AgentContracts: true,
          InsuranceCarriers: true,
          BranchTypes: true,
          SubBranchs: true,
          Patrimonials: true,
          Travels: true,
          Periods: true,
          Vehicles: true,
        },
      });
      return policies;
    } catch (error) {
      console.log(error);
      throw new ForbiddenException(`Error al buscar poliza #${id}`);
    }
  }

  async updatePolicyClient(
    id: number,
    UpdatePolicyClientDto: UpdatePolicyClientDto,
  ) {
    try {
      const policies = await this.prisma.policies.update({
        where: {
          id,
        },
        data: {
          policyNum: UpdatePolicyClientDto.policyNum,
          Risk: UpdatePolicyClientDto.Risk,
          Renovable: UpdatePolicyClientDto.Renovable,
          insuredValue: UpdatePolicyClientDto.insuredValue,
          InsuranceCarriers: {
            connect: {
              id: UpdatePolicyClientDto.insuranceCarrierId,
            },
          },
          BranchTypes: {
            connect: {
              id: UpdatePolicyClientDto.branchTypeId,
            },
          },
          SubBranchs: {
            connect: {
              id: UpdatePolicyClientDto.subBranchId,
            },
          },
          PolicyStatus: {
            connect: {
              id: UpdatePolicyClientDto.policyStatusId,
            },
          },
          Periods: {
            create: {
              startDate: UpdatePolicyClientDto.periodStartDate,
              endDate: UpdatePolicyClientDto.periodEndDate,
              renewal: UpdatePolicyClientDto.renewal,
            },
          },
          AgentContracts: {
            create: {
              agentId: UpdatePolicyClientDto.agentId,
            },
          },
          ClientHasPolicies: {
            create: {
              relationId: 1,
              clientId: UpdatePolicyClientDto.clientId,
              ClientHasTaker: {
                create: {
                  PolicyDetails: {
                    create: {
                      primeValue: UpdatePolicyClientDto.primeValue,
                      AnnexValue: UpdatePolicyClientDto.AnnexValue,
                      comission: UpdatePolicyClientDto.comission,
                      comissionPolicyStatus:
                        UpdatePolicyClientDto.comissionPolicyStatus,
                      ValorFinalizacion:
                        UpdatePolicyClientDto.ValorFinalizacion,
                      Total: UpdatePolicyClientDto.Total,
                      Currencies: {
                        connect: {
                          id: UpdatePolicyClientDto.currencyId,
                        },
                      },
                      Periodicities: {
                        connect: {
                          id: UpdatePolicyClientDto.periodicityId,
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

      return policies;
    } catch (error) {
      console.log(error);
      throw new ForbiddenException('Error al actualizar poliza');
    }
  }

  async updatePolicyVehicle(
    id: number,
    updatePolicyVehicleDto: UpdatePolicyVehicleDto,
  ) {
    try {
      const policies = await this.prisma.policies.update({
        where: {
          id,
        },
        data: {
          policyNum: updatePolicyVehicleDto.policyNum,
          Risk: updatePolicyVehicleDto.Risk,
          Renovable: updatePolicyVehicleDto.Renovable,
          insuredValue: updatePolicyVehicleDto.insuredValue,
          Vehicles: {
            create: {
              brand: updatePolicyVehicleDto.brand,
              class: updatePolicyVehicleDto.class,
              model: updatePolicyVehicleDto.model,
              vehicleType: updatePolicyVehicleDto.vehicleType,
              serviceType: updatePolicyVehicleDto.serviceType,
              gasConverted: updatePolicyVehicleDto.gasConverted,
              vehicleAge: updatePolicyVehicleDto.vehicleAge,
            },
          },
          InsuranceCarriers: {
            connect: {
              id: updatePolicyVehicleDto.insuranceCarrierId,
            },
          },
          BranchTypes: {
            connect: {
              id: updatePolicyVehicleDto.branchTypeId,
            },
          },
          SubBranchs: {
            connect: {
              id: updatePolicyVehicleDto.subBranchId,
            },
          },
          PolicyStatus: {
            connect: {
              id: updatePolicyVehicleDto.policyStatusId,
            },
          },
          Periods: {
            create: {
              startDate: updatePolicyVehicleDto.periodStartDate,
              endDate: updatePolicyVehicleDto.periodEndDate,
              renewal: updatePolicyVehicleDto.renewal,
            },
          },
          AgentContracts: {
            create: {
              agentId: updatePolicyVehicleDto.agentId,
            },
          },
          ClientHasPolicies: {
            create: {
              relationId: 1,
              clientId: updatePolicyVehicleDto.clientId,
              ClientHasTaker: {
                create: {
                  PolicyDetails: {
                    create: {
                      primeValue: updatePolicyVehicleDto.primeValue,
                      AnnexValue: updatePolicyVehicleDto.AnnexValue,
                      comission: updatePolicyVehicleDto.comission,
                      comissionPolicyStatus:
                        updatePolicyVehicleDto.comissionPolicyStatus,
                      ValorFinalizacion:
                        updatePolicyVehicleDto.ValorFinalizacion,
                      Total: updatePolicyVehicleDto.Total,
                      Currencies: {
                        connect: {
                          id: updatePolicyVehicleDto.currencyId,
                        },
                      },
                      Periodicities: {
                        connect: {
                          id: updatePolicyVehicleDto.periodicityId,
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

      return policies;
    } catch (error) {
      console.log(error);
      throw new ForbiddenException('Error al actualizar poliza');
    }
  }

  async updatePolicyPatrimonial(
    id: number,
    UpdatePolicyPatrimonialDto: UpdatePolicyPatrimonialDto,
  ) {
    try {
      const policies = await this.prisma.policies.update({
        where: {
          id,
        },
        data: {
          policyNum: UpdatePolicyPatrimonialDto.policyNum,
          Risk: UpdatePolicyPatrimonialDto.Risk,
          Renovable: UpdatePolicyPatrimonialDto.Renovable,
          insuredValue: UpdatePolicyPatrimonialDto.insuredValue,
          Patrimonials: {
            create: {
              type: UpdatePolicyPatrimonialDto.type,
              totalValue: UpdatePolicyPatrimonialDto.totalValue,
              machineryValue: UpdatePolicyPatrimonialDto.machineryValue,
              furnitureValue: UpdatePolicyPatrimonialDto.furnitureValue,
            },
          },
          InsuranceCarriers: {
            connect: {
              id: UpdatePolicyPatrimonialDto.insuranceCarrierId,
            },
          },
          BranchTypes: {
            connect: {
              id: UpdatePolicyPatrimonialDto.branchTypeId,
            },
          },
          SubBranchs: {
            connect: {
              id: UpdatePolicyPatrimonialDto.subBranchId,
            },
          },
          PolicyStatus: {
            connect: {
              id: UpdatePolicyPatrimonialDto.policyStatusId,
            },
          },
          Periods: {
            create: {
              startDate: UpdatePolicyPatrimonialDto.periodStartDate,
              endDate: UpdatePolicyPatrimonialDto.periodEndDate,
              renewal: UpdatePolicyPatrimonialDto.renewal,
            },
          },
          AgentContracts: {
            create: {
              agentId: UpdatePolicyPatrimonialDto.agentId,
            },
          },
          ClientHasPolicies: {
            create: {
              relationId: 1,
              clientId: UpdatePolicyPatrimonialDto.clientId,
              ClientHasTaker: {
                create: {
                  PolicyDetails: {
                    create: {
                      primeValue: UpdatePolicyPatrimonialDto.primeValue,
                      AnnexValue: UpdatePolicyPatrimonialDto.AnnexValue,
                      comission: UpdatePolicyPatrimonialDto.comission,
                      comissionPolicyStatus:
                        UpdatePolicyPatrimonialDto.comissionPolicyStatus,
                      ValorFinalizacion:
                        UpdatePolicyPatrimonialDto.ValorFinalizacion,
                      Total: UpdatePolicyPatrimonialDto.Total,
                      Currencies: {
                        connect: {
                          id: UpdatePolicyPatrimonialDto.currencyId,
                        },
                      },
                      Periodicities: {
                        connect: {
                          id: UpdatePolicyPatrimonialDto.periodicityId,
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

      return policies;
    } catch (error) {
      console.log(error);
      throw new ForbiddenException('Error al actualizar poliza');
    }
  }

  async updatePolicyTravel(
    id: number,
    UpdatePolicyTravelDto: UpdatePolicyTravelDto,
  ) {
    try {
      const policies = await this.prisma.policies.update({
        where: {
          id,
        },
        data: {
          policyNum: UpdatePolicyTravelDto.policyNum,
          Risk: UpdatePolicyTravelDto.Risk,
          Renovable: UpdatePolicyTravelDto.Renovable,
          insuredValue: UpdatePolicyTravelDto.insuredValue,
          Travels: {
            create: {
              startCountry: UpdatePolicyTravelDto.startCountry,
              endCountry: UpdatePolicyTravelDto.endCountry,
              startDate: UpdatePolicyTravelDto.startDate,
              endDate: UpdatePolicyTravelDto.endDate,
            },
          },
          InsuranceCarriers: {
            connect: {
              id: UpdatePolicyTravelDto.insuranceCarrierId,
            },
          },
          BranchTypes: {
            connect: {
              id: UpdatePolicyTravelDto.branchTypeId,
            },
          },
          SubBranchs: {
            connect: {
              id: UpdatePolicyTravelDto.subBranchId,
            },
          },
          PolicyStatus: {
            connect: {
              id: UpdatePolicyTravelDto.policyStatusId,
            },
          },
          Periods: {
            create: {
              startDate: UpdatePolicyTravelDto.periodStartDate,
              endDate: UpdatePolicyTravelDto.periodEndDate,
              renewal: UpdatePolicyTravelDto.renewal,
            },
          },
          AgentContracts: {
            create: {
              agentId: UpdatePolicyTravelDto.agentId,
            },
          },
          ClientHasPolicies: {
            create: {
              relationId: 1,
              clientId: UpdatePolicyTravelDto.clientId,
              ClientHasTaker: {
                create: {
                  PolicyDetails: {
                    create: {
                      primeValue: UpdatePolicyTravelDto.primeValue,
                      AnnexValue: UpdatePolicyTravelDto.AnnexValue,
                      comission: UpdatePolicyTravelDto.comission,
                      comissionPolicyStatus:
                        UpdatePolicyTravelDto.comissionPolicyStatus,
                      ValorFinalizacion:
                        UpdatePolicyTravelDto.ValorFinalizacion,
                      Total: UpdatePolicyTravelDto.Total,
                      Currencies: {
                        connect: {
                          id: UpdatePolicyTravelDto.currencyId,
                        },
                      },
                      Periodicities: {
                        connect: {
                          id: UpdatePolicyTravelDto.periodicityId,
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

      return policies;
    } catch (error) {
      console.log(error);
      throw new ForbiddenException('Error al actualizar poliza');
    }
  }

  async remove(id: number) {
    try {
      const policies = await this.prisma.policies.delete({
        where: {
          id,
        },
      });

      return policies;
    } catch (error) {
      console.log(error);
      throw new ForbiddenException('Error al eliminar poliza');
    }
  }
}
