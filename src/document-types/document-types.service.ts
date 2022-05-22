  import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { PrismaService } from 'src/prisma/prisma.service';
  import { CreateDocumentTypeDto } from './dto/create-document-type.dto';
  import { UpdateDocumentTypeDto } from './dto/update-document-type.dto';
  
  @Injectable()
  export class DocumentTypesService {
    constructor(private prisma: PrismaService) {}

    async create(CreateDocumentTypeDto: CreateDocumentTypeDto) {
      try {
        const documentType = await this.prisma.documentTypes.create({
          data: {
            name: CreateDocumentTypeDto.name,
          },
        });
  
        return documentType;
      } catch (error) {
        if (error instanceof PrismaClientKnownRequestError) {
          if (error.code === 'P2002') {
            throw new ForbiddenException('Error en create documentType: nombre debe ser unico');
          }
        }
        throw error;
      }
    }
  
    async findAll() {
      try {
        const documentTypes = await this.prisma.documentTypes.findMany();
        return documentTypes;
      } catch (error) {
        console.log(error);
        throw new ForbiddenException('Error en findAll documentType');
      }
    }
  
    async findOne(id: number) {
      try {
        const documentType = await this.prisma.documentTypes.findUnique({
          where: {
            id,
          },
        });
        return documentType;
      } catch (error) {
        console.log(error);
        throw new ForbiddenException('Error en findOne documentType');
      }
    }
  
    async update(
      id: number,
      updatedocumentTypeDto: UpdateDocumentTypeDto,
    ) {
      try {
        const documentType = await this.prisma.documentTypes.update({
          where: {
            id,
          },
          data: {
            name: updatedocumentTypeDto.name,
          },
        });
  
        return documentType;
      } catch (error) {
        console.log(error);
        throw new ForbiddenException('Error en update documentType');
      }
    }
  
    async remove(id: number) {
      try {
        const documentType = await this.prisma.documentTypes.delete({
          where: {
            id,
          },
        });
  
        return documentType;
      } catch (error) {
        console.log(error);
        throw new ForbiddenException('Error en remove documentType');
      }
    }
  }