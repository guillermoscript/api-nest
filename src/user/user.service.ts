import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import * as argon from 'argon2';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto) {
    // generate password hash
    console.log(createUserDto, ' user service');
    const hash = await argon.hash(createUserDto.password);
    
    try {
      const user = await this.prisma.users.create({
        data: {
          email: createUserDto.email,
          username: createUserDto.username,
          hashedPassword: hash,
          userRole: createUserDto?.userRole,
        },
      });

      return user;
    } catch (error) {
      console.log(error);
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new ForbiddenException('El correo ingresado ya se encuentra en uso');
        }
      }

      throw error;
    }
  }

  async findAll() {
    try {
      const users = await this.prisma.users.findMany({
        orderBy:{
          id: 'asc',
        },
      });
      return users;
    } catch (error) {
      console.log(error);
      throw new ForbiddenException('No se pudo realizar la busqueda');
    }
  }

  async findOne(id: number) {
    try {
      const user = await this.prisma.users.findUnique({
      where: {
        id,
      },
      });
      return user;
    } catch (error) {
      console.log(error);
      throw new ForbiddenException('No se pudo encontrar el usuario');
    }
  }

  async findByEmail(email: string) {
    const user = await this.prisma.users.findUnique({
      where: {
        email,
      },
    });

    if (!user) {
      throw new ForbiddenException('El correo ingresado no existe');
    }

    return user;
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const hash = await argon.hash(updateUserDto.password);
    try{
      const user = await this.prisma.users.update({
        where: {
          id,
        },
        data: {
          email: updateUserDto.email,
          username: updateUserDto.username,
          userRole: updateUserDto.userRole,
          hashedPassword: hash,
        },
      });
      return user;
    } catch (error) {
      console.log(error);
      throw new ForbiddenException('El correo ingresado ya se encuentra en uso');
    }
  }

  async remove(id: number) {
    try {
      const user = await this.prisma.users.delete({
        where: {
          id,
        },
      });
      return user;
    } catch (error) {
      console.log(error);
      throw new ForbiddenException('No se pudo eliminar el usuario');
    }
  }
}
