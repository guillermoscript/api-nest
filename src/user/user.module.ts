import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from 'src/auth/auth.controller';
import { AuthService } from 'src/auth/auth.service';
import { UserController } from './user.controller';

@Module({
  imports: [JwtModule.register({})],
  controllers: [AuthController, UserController],
  providers: [AuthService],
})
export class UserModule {}
