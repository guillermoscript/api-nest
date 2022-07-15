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
      const user = await this.prisma.persons.create({
        data: {
          email: createUserDto.email,
          name: createUserDto.name,
          lastName: createUserDto.lastName,
          document: createUserDto?.document,
          birthDate: createUserDto?.birthDate,
          phone: createUserDto?.phone,
          gender: createUserDto?.gender,
          Users: {
            create: {
              hashedPassword: hash,
              userRole: createUserDto?.userRole,
            },
          },
        },
      });

      return user;
    } catch (error) {
      console.log(error);
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new ForbiddenException(' Aye Mateee that email is mine ya');
        }
      }

      throw error;
    }
  }

  findAll() {
    return `This action returns all user`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  async findByEmail(email: string) {
    const user = await this.prisma.persons.findUnique({
      where: {
        email,
      },
      include: {
        Users: true,
      },
    });

    if (!user) {
      throw new ForbiddenException('El correo ingresado no existe');
    }

    return user;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
