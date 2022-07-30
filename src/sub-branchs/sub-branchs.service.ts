import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { async } from 'rxjs';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateSubBranchDto } from './dto/create-sub-branch.dto';
import { UpdateSubBranchDto } from './dto/update-sub-branch.dto';

@Injectable()
export class SubBranchsService {
  constructor(private prisma: PrismaService) {}
  async create(createSubBranchDto: CreateSubBranchDto) {
    try {
      const subBranch = await this.prisma.subBranchs.create({
        data: {
          name: createSubBranchDto.name,
          BranchTypes: {
            connect: {
              id: createSubBranchDto.branchTypeId,
            },
          },
        },
      });

      return subBranch;
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new ForbiddenException('El ramo ya existe');
        }
      }
      throw error;
    }
  }
  async findAll() {
    try {
      const subBranch = await this.prisma.subBranchs.findMany({
        include:{
          BranchTypes: true,
        },
        orderBy:{
          id: 'asc'
        }
      });
      return subBranch;
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new ForbiddenException('No se pudo obtener los ramos');
        }
      }
      throw error;
    }
  }

  async findOne(id: number) {
    try {
      const subBranch = await this.prisma.subBranchs.findUnique({
        where: {
          id,
        },
        include:{
          BranchTypes: true,
        },
      });
      return subBranch;
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new ForbiddenException('no se pudo obtener el ramo');
        }
      }
      throw error;
    }
  }

  async getSubBranchByBranchId(branchId: number) {
    try {
      const subBranch = await this.prisma.subBranchs.findMany({
        where: {
          branchTypeId: branchId,
        },
      });
      return subBranch;
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new ForbiddenException('no se pudo obtener el ramo');
        }
      }
      throw error;
    }
  }

  async update(id: number, updateSubBranchDto: UpdateSubBranchDto) {
    try {
      const subBranch = await this.prisma.subBranchs.update({
        where: {
          id,
        },
        data: {
          name: updateSubBranchDto.name,
          BranchTypes: {
            connect: {
              id: updateSubBranchDto.branchTypeId,
            },
          },
        },
      });
      return subBranch;
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new ForbiddenException('El ramo ya existe');
        }
      }
      throw error;
    }
  }

  async remove(id: number) {
    try {
      const subBranch = await this.prisma.subBranchs.delete({
        where: {
          id,
        },
      });
      return subBranch;
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new ForbiddenException('No se pudo eliminar el ramo');
        }
      }
      throw error;
    }
  }
}
