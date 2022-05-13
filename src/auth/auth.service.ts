import { ForbiddenException, Injectable } from '@nestjs/common';
import { AuthDto } from './dto';
import * as argon from 'argon2';

import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
import { CreateUserDto } from 'src/user/dto/create-user.dto';

@Injectable()
export class AuthService {
  constructor(
    private jwt: JwtService,
    private config: ConfigService,
    private userService: UserService,
  ) {}

  async login(dto: AuthDto) {
    // search for user email

    const { Users, email } = await this.userService.findByEmail(dto.email);

    // check if entity exists
    if (!Users) {
      throw new ForbiddenException(
        'Aye Mate are yu stupid? that email it aint here ya punk',
      );
    }

    // search for user password
    const matches = await argon.verify(Users.hashedPassword, dto.password);

    if (!matches) {
      throw new ForbiddenException(
        'Aye Mate are yu stupid? that password is wrong',
      );
    }

    console.log(Users);
    return this.signToken(Users.id, email);
  }

  async signToken(
    userId: number,
    email: string,
  ): Promise<{ access_token: string }> {
    const payload = { sub: userId, email };
    const secret = 'secret';
    const access_token = await this.jwt.signAsync(payload, {
      expiresIn: '1h',
      secret,
    });
    return {
      access_token,
    };
  }

  async signUp(dto: CreateUserDto) {
    console.log(dto, 'signup service dto');
    const user = await this.userService.create(dto);
    console.log(user, 'signup service');
    return this.signToken(user.id, user.email);
  }
}
