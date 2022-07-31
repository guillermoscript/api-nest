  import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { PrismaService } from 'src/prisma/prisma.service';
  import { CreateAddressDto } from './dto/create-address.dto';
  import { UpdateAddressDto } from './dto/update-address.dto';
  
  @Injectable()
  export class AddressesService {
    constructor(private prisma: PrismaService) {}

    async create(CreateAddressDto: CreateAddressDto) {
      try {
        const Address = await this.prisma.addresses.create({
          data: {
            street: CreateAddressDto.street,
            Cities: {
              connect:{
                id: CreateAddressDto.cityId,
              },
            },
          },
        });
  
        return Address;
      } catch (error) {
        if (error instanceof PrismaClientKnownRequestError) {
          if (error.code === 'P2002') {
            throw new ForbiddenException('Error en create Address');
          }
        }
        throw error;
      }
    }
  
    async findAll() {
      try {
        const addresses = await this.prisma.addresses.findMany();
        return addresses;
      } catch (error) {
        console.log(error);
        throw new ForbiddenException('Error en findAll Address');
      }
    }
  
    async findOne(id: number) {
      try {
        const Address = await this.prisma.addresses.findUnique({
          where: {
            id,
          },
        });
        return Address;
      } catch (error) {
        console.log(error);
        throw new ForbiddenException('Error en findOne Address');
      }
    }
  
    async update(
      id: number,
      updateAddressDto: UpdateAddressDto,
    ) {
      try {
        const Address = await this.prisma.addresses.update({
          where: {
            id,
          },
          data: {
            street: updateAddressDto.street,
          },
        });
  
        return Address;
      } catch (error) {
        console.log(error);
        throw new ForbiddenException('Error en update Address');
      }
    }
  
    async remove(id: number) {
      try {
        const Address = await this.prisma.addresses.delete({
          where: {
            id,
          },
        });
  
        return Address;
      } catch (error) {
        console.log(error);
        throw new ForbiddenException('Error en remove Address');
      }
    }
  }