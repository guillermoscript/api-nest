import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateBranchTypeDto } from './dto/create-branch-type.dto';
import { UpdateBranchTypeDto } from './dto/update-branch-type.dto';

@Injectable()
export class BranchTypesService {
  constructor(private prisma: PrismaService) {}
  async create(createBranchTypeDto: CreateBranchTypeDto) {
    try {
      const branchType = await this.prisma.branchTypes.create({
        data: {
          name: createBranchTypeDto.name,
        },
      });

      return branchType;
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
    try {
      const branchTypes = await this.prisma.branchTypes.findMany();
      return branchTypes;
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
      const branchType = await this.prisma.branchTypes.findUnique({
        where: {
          id,
        },
      });
      return branchType;
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new ForbiddenException(' Aye Mateee thats an error xd');
        }
      }
      throw error;
    }
  }

  async update(id: number, updateBranchTypeDto: UpdateBranchTypeDto) {
    try {
      const branchType = await this.prisma.branchTypes.update({
        where: {
          id,
        },
        data: {
          name: updateBranchTypeDto.name,
        },
      });

      return branchType;
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
      const branchType = await this.prisma.branchTypes.delete({
        where: {
          id,
        },
      });

      return branchType;
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
