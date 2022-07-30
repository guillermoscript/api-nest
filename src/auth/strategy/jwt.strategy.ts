import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { ForbiddenException, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor(config: ConfigService, private prisma: PrismaService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: 'secret',
      //   secretOrKey: config.get('JWT_SECRET'),
    });
  }

  async validate(payload: { sub: number; email: string }) {
    const entity = await this.prisma.users.findUnique({
      where: { id: payload.sub },
    });
    const userRole = entity.userRole;
    if (!entity) {
      throw new ForbiddenException(
        'Aye Mate error from validate JWT strategy ya punk',
      );
    }
    return {
      id: entity.id,
      email: entity.email,
      userRole,
    };
  }
}
