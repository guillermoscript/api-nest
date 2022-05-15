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
          throw new ForbiddenException(' Aye Mateee that email is mine ya');
        }
      }
      throw error;
    }
  }
  async findAll() {
    try {
      const subBranch = await this.prisma.subBranchs.findMany();
      return subBranch;
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
      const subBranch = await this.prisma.subBranchs.findUnique({
        where: {
          id,
        },
      });
      return subBranch;
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new ForbiddenException(' Aye Mateee thats an error xd');
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
        },
      });
      return subBranch;
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
      const subBranch = await this.prisma.subBranchs.delete({
        where: {
          id,
        },
      });
      return subBranch;
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
