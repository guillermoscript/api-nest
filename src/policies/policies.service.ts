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
      console.log(createPolicyClientDto);
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
          PolicyDetails: {
            create: {
              primeValue: createPolicyClientDto.primeValue,
              AnnexValue: createPolicyClientDto.AnnexValue,
              ValorFinalizacion: createPolicyClientDto.ValorFinalizacion,
              Total: createPolicyClientDto.Total,
              Periodicities: {
                connect: {
                  id: createPolicyClientDto.periodicityId,
                },
              },
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
              relationId: createPolicyClientDto.relationId,
              clientId: createPolicyClientDto.clientId,
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
              vehicleAge: createPolicyVehicleDto.vehicleAge,
            },
          },
          InsuranceCarriers: {
            connect: {
              id: createPolicyVehicleDto.insuranceCarrierId,
            },
          },
          PolicyDetails: {
            create: {
              primeValue: createPolicyVehicleDto.primeValue,
              AnnexValue: createPolicyVehicleDto.AnnexValue,
              ValorFinalizacion:
                createPolicyVehicleDto.ValorFinalizacion,
              Total: createPolicyVehicleDto.Total,
              Periodicities: {
                connect: {
                  id: createPolicyVehicleDto.periodicityId,
                },
              },
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
              relationId: createPolicyVehicleDto.relationId,
              clientId: createPolicyVehicleDto.clientId,
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
          PolicyDetails: {
            create: {
              primeValue: createPolicyPatrimonialDto.primeValue,
              AnnexValue: createPolicyPatrimonialDto.AnnexValue,
              ValorFinalizacion:
                createPolicyPatrimonialDto.ValorFinalizacion,
              Total: createPolicyPatrimonialDto.Total,
              Periodicities: {
                connect: {
                  id: createPolicyPatrimonialDto.periodicityId,
                },
              },
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
              relationId: createPolicyPatrimonialDto.relationId,
              clientId: createPolicyPatrimonialDto.clientId,
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
          PolicyDetails: {
            create: {
              primeValue: createPolicyTravelDto.primeValue,
              AnnexValue: createPolicyTravelDto.AnnexValue,
              ValorFinalizacion:
                createPolicyTravelDto.ValorFinalizacion,
              Total: createPolicyTravelDto.Total,
              Periodicities: {
                connect: {
                  id: createPolicyTravelDto.periodicityId,
                },
              },
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
              relationId: createPolicyTravelDto.relationId,
              clientId: createPolicyTravelDto.clientId,
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
      const policies = await this.prisma.policies.findMany({
        include: {
          PolicyDetails: {
            include: {
              Periodicities: true,
              Payments: true,
            },
          },
          ClientHasPolicies: true,
          InsuranceCarriers: true,
          BranchTypes: true,
          SubBranchs: true,
          AgentContracts: true,
          Vehicles: true,
          Travels: true,
          Patrimonials: true,
          Periods: true,
          PolicyStatus:true
        },
        orderBy:{
          id: 'asc'
        },
      });
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
          PolicyDetails: {
            include: {
              Periodicities: true,
              Payments: true,
            },
          },
          ClientHasPolicies: true,
          InsuranceCarriers: true,
          BranchTypes: true,
          SubBranchs: true,
          AgentContracts: true,
          Vehicles: true,
          Travels: true,
          Patrimonials: true,
          Periods: true,
          PolicyStatus:true
        },
        where: {
          id,
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
          PolicyDetails: {
            create: {
              primeValue: UpdatePolicyClientDto.primeValue,
              AnnexValue: UpdatePolicyClientDto.AnnexValue,
              ValorFinalizacion:
                UpdatePolicyClientDto.ValorFinalizacion,
              Total: UpdatePolicyClientDto.Total,
              Periodicities: {
                connect: {
                  id: UpdatePolicyClientDto.periodicityId,
                },
              },
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
              relationId: UpdatePolicyClientDto.relationId,
              clientId: UpdatePolicyClientDto.clientId,
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
              vehicleAge: updatePolicyVehicleDto.vehicleAge,
            },
          },
          InsuranceCarriers: {
            connect: {
              id: updatePolicyVehicleDto.insuranceCarrierId,
            },
          },
          PolicyDetails: {
            create: {
              primeValue: updatePolicyVehicleDto.primeValue,
              AnnexValue: updatePolicyVehicleDto.AnnexValue,
              ValorFinalizacion:
                updatePolicyVehicleDto.ValorFinalizacion,
              Total: updatePolicyVehicleDto.Total,
              Periodicities: {
                connect: {
                  id: updatePolicyVehicleDto.periodicityId,
                },
              },
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
              relationId: updatePolicyVehicleDto.relationId,
              clientId: updatePolicyVehicleDto.clientId,
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
          PolicyDetails: {
            create: {
              primeValue: UpdatePolicyPatrimonialDto.primeValue,
              AnnexValue: UpdatePolicyPatrimonialDto.AnnexValue,
              ValorFinalizacion:
                UpdatePolicyPatrimonialDto.ValorFinalizacion,
              Total: UpdatePolicyPatrimonialDto.Total,
              Periodicities: {
                connect: {
                  id: UpdatePolicyPatrimonialDto.periodicityId,
                },
              },
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
              relationId: UpdatePolicyPatrimonialDto.relationId,
              clientId: UpdatePolicyPatrimonialDto.clientId,
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
          PolicyDetails: {
            create: {
              primeValue: UpdatePolicyTravelDto.primeValue,
              AnnexValue: UpdatePolicyTravelDto.AnnexValue,
              ValorFinalizacion:
                UpdatePolicyTravelDto.ValorFinalizacion,
              Total: UpdatePolicyTravelDto.Total,
              Periodicities: {
                connect: {
                  id: UpdatePolicyTravelDto.periodicityId,
                },
              },
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
              relationId: UpdatePolicyTravelDto.relationId,
              clientId: UpdatePolicyTravelDto.clientId,
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

  async countPolicy(){
    try {
      const count = await this.prisma.policies.count();
      return count;
    } catch (error) {
      console.log(error);
      throw new ForbiddenException('Error contar polizas');
    }
  }

  async sumInsured(){
    try {
      const sum = await this.prisma.policies.aggregate({
        _sum:{
          insuredValue: true,
        },
      })
      return sum;
    } catch (error) {
      console.log(error);
      throw new ForbiddenException('Error sumar valor asegurado');
    }
  }

  async sumPrime(){
    try {
      const sum = await this.prisma.policyDetails.aggregate({
        where:{
          Policies:{
            policyStatusId : 3,
          },
        },
        _sum:{
          primeValue: true,
        },
      })
      return sum;
    } catch (error) {
      console.log(error);
      throw new ForbiddenException('Error sumar valor prima');
    }
  }

  async countCotization(){
    try {
      const num = await this.prisma.policies.aggregate({
        where:{
          PolicyStatus: {
            id: 1,
          },
        },
        _count:{
          policyNum: true,
        },
      })
      return num;
    } catch (error) {
      throw new ForbiddenException('Error sumar valor prima');
    }
  }

  async countSend(){
    try {
      const num = await this.prisma.policies.aggregate({
        where:{
          PolicyStatus: {
            id: 2,
          },
        },
        _count:{
          policyNum: true,
        },
      })
      return num;
    } catch (error) {
      throw new ForbiddenException('Error sumar valor prima');
    }
  }

  async countPaid(){
    try {
      const num = await this.prisma.policies.aggregate({
        where:{
          PolicyStatus: {
            id: 3,
          },
        },
        _count:{
          policyNum: true,
        },
      })
      return num;
    } catch (error) {
      throw new ForbiddenException('Error sumar valor prima');
    }
  }

  async InsurerPrimes(){
    try {
      const result = await this.prisma.$queryRaw`
      SELECT a.name as aseguradora, b.name as ramo, sum(e."primeValue") as "primaNeta", sum(e."Total") as "primaTotal"
      FROM public."InsuranceCarriers" a, public."SubBranchs" b, public."Policies" c, public."PolicyDetails" e
      WHERE a.id = c."InsuranceCarrierId" AND
          b.id = c."subBranchId" AND
          e."policyId" = c.id AND
          c."policyStatusId" = 3
      GROUP BY a.name, b.name
      ORDER BY sum(e."Total") desc`
      return result;
    } catch (error) {
      console.log(error);
      throw new ForbiddenException('Error al generar reporte');
    }
  }

  async ClientPrimes(){
    try {
      const result = await this.prisma.$queryRaw`
      SELECT a.name, a."lastName", a."documentTypeId", a.document, sum(e."primeValue") as "primaNeta", sum(e."Total") as "primaTotal"
      FROM  public."Persons" a, public."Clients" b, public."Policies" c, public."ClientHasPolicies" d, public."PolicyDetails" e
      WHERE a.id = b."personId" AND
            b.id = d."clientId" AND
            d."policyId" = c.id AND
            e."policyId" = c.id AND
            c."policyStatusId" = 3
      GROUP BY a.name, a."lastName", a."documentTypeId", a.document
      ORDER BY sum(e."Total") desc`
      return result;
    } catch (error) {
      console.log(error);
      throw new ForbiddenException('Error al generar reporte');
    }
  }

  async PeriodPrimes(){
    try {
      const result = await this.prisma.$queryRaw`
      SELECT TO_CHAR(b."startDate", 'YYYY') as "year", TO_CHAR(b."startDate", 'Month') as "month", sum(d."primeValue") as "primaNeta", sum(d."Total") as "primaTotal"
      FROM  public."Periods" b, public."Policies" c, public."PolicyDetails" d
      WHERE b."policyId" = c.id AND
          d."policyId" = c.id AND
          c."policyStatusId" = 3
      GROUP BY year, month
      ORDER BY sum(d."Total") desc`
      return result;
    } catch (error) {
      console.log(error);
      throw new ForbiddenException('Error al generar reporte');
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
