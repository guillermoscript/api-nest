import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { UserService } from 'src/user/user.service';
import { AuthService } from './auth.service';
import { AuthDto, ResponseLoginDto, ResponseSignUpDto } from './dto';
@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private readonly userService: UserService,
  ) {}

  @HttpCode(HttpStatus.OK)
  @ApiOkResponse({ type: ResponseLoginDto, description: 'Login response' })
  @Post('login')
  login(@Body() dto: AuthDto) {
    return this.authService.login(dto);
  }

  @HttpCode(HttpStatus.CREATED)
  @ApiOkResponse({ type: ResponseSignUpDto, description: 'Sign up response' })
  @Post('signup')
  signUp(@Body() dto) {
    console.log(dto, 'prins');
    return this.authService.signUp(dto);
  }
}
