import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateVehicleDto } from './dto/create-vehicle.dto';
import { UpdateVehicleDto } from './dto/update-vehicle.dto';

@Injectable()
export class VehiclesService {
  constructor(private prisma: PrismaService) { }

  async create(CreateVehicleDto: CreateVehicleDto) {
    try {
      const vehicle = await this.prisma.vehicles.create({
        data: {
          brand: CreateVehicleDto.brand,
          class: CreateVehicleDto.class,
          model: CreateVehicleDto.model,
          vehicleType: CreateVehicleDto.vehicleType,
          serviceType: CreateVehicleDto.serviceType,
          gasConverted: CreateVehicleDto.gasConverted,
          vehicleAge: CreateVehicleDto.vehicleAge,
          Policies: {
            connect: {
              id: CreateVehicleDto.policyId,
            },
          },
        },
      });

      return vehicle;
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new ForbiddenException('Error en create vehicle');
        }
      }
      throw error;
    }
  }

  async findAll() {
    try {
      const vehicles = await this.prisma.vehicles.findMany();
      return vehicles;
    } catch (error) {
      console.log(error);
      throw new ForbiddenException('Error en findAll vehicle');
    }
  }

  async findOne(id: number) {
    try {
      const vehicle = await this.prisma.vehicles.findUnique({
        where: {
          id,
        },
      });
      return vehicle;
    } catch (error) {
      console.log(error);
      throw new ForbiddenException('Error en findOne vehicle');
    }
  }

  async update(
    id: number,
    updatevehicleDto: UpdateVehicleDto,
  ) {
    try {
      const vehicle = await this.prisma.vehicles.update({
        where: {
          id,
        },
        data: {
          brand: updatevehicleDto.brand,
          class: updatevehicleDto.class,
          model: updatevehicleDto.model,
          vehicleType: updatevehicleDto.vehicleType,
          serviceType: updatevehicleDto.serviceType,
          gasConverted: updatevehicleDto.gasConverted,
          vehicleAge: updatevehicleDto.vehicleAge,
        },
      });

      return vehicle;
    } catch (error) {
      console.log(error);
      throw new ForbiddenException('Error en update vehicle');
    }
  }

  async remove(id: number) {
    try {
      const vehicle = await this.prisma.vehicles.delete({
        where: {
          id,
        },
      });

      return vehicle;
    } catch (error) {
      console.log(error);
      throw new ForbiddenException('Error en remove vehicle');
    }
  }
}