import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthDto } from './dto';
import * as argon from 'argon2';

import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwt: JwtService,
    private config: ConfigService,
  ) {}

  async login(dto: AuthDto) {
    // search for user email

    const entity = await this.prisma.entities.findUnique({
      where: {
        email: dto.email,
      },
    });

    // check if entity exists
    if (!entity) {
      throw new ForbiddenException(
        'Aye Mate are yu stupid? that email it aint here ya punk',
      );
    }

    // search for user password

    // const user = await entity.Persons().Users().findUnique();
    const user = await this.prisma.users.findFirst({
      where: {
        Persons: {
          Entities: {
            id: entity.id,
          },
        },
      },
    });

    const matches = await argon.verify(user.hashedPassword, dto.password);

    if (!matches) {
      throw new ForbiddenException(
        'Aye Mate are yu stupid? that password is wrong',
      );
    }

    console.log(entity);
    return this.signToken(entity.id, entity.email);
  }

  async signToken(
    userId: number,
    email: string,
  ): Promise<{ access_token: string }> {
    const payload = { sub: userId, email };
    const secret = 'secret';
    // el env no se leee
    // console.log(this.config);
    // console.log(this.config.get('JWT_SECRET'));
    // console.log(process.env.JWT_SECRET);
    const access_token = await this.jwt.signAsync(payload, {
      expiresIn: '1h',
      secret,
    });
    return {
      access_token,
    };
  }

  async signUp(dto: AuthDto) {
    // generate password hash
    const hash = await argon.hash(dto.password);

    try {
      const entity = await this.prisma.entities.create({
        data: {
          email: dto.email,
          Persons: {
            create: {
              gender: 'Others',
              Users: {
                create: {
                  hashedPassword: hash,
                },
              },
              Addresses: {
                create: {
                  Address1: 'test',
                },
              },
            },
          },
        },
      });

      console.log(entity);
      return entity;
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new ForbiddenException(' Aye Mateee that email is mine ya');
        }
      }

      throw error;
    }
  }
}
