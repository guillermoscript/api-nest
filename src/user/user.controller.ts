import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
  HttpStatus,
  UseGuards,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiForbiddenResponse, ApiNotFoundResponse, ApiOkResponse, ApiTags, ApiUnauthorizedResponse } from '@nestjs/swagger';
import { JwtGuard } from 'src/auth/guard';
import { AbilityGuard } from 'src/ability/ability.guard';
import { CheckAbilty, ManageReadAbility } from 'src/ability/ability.decorator';
import { Action } from 'src/ability/ability.factory';
@UseGuards(JwtGuard)
@ApiTags('Users')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiOkResponse({ type: CreateUserDto, description: 'Usuario Creado' })
  @ApiForbiddenResponse({ description: 'Error, no se pudo crear usuario' })
  @ApiUnauthorizedResponse({ description: 'Error, no autorizado' })
  @UseGuards(AbilityGuard)
  @CheckAbilty({ action: Action.MANAGE, subject: 'all' })
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get('/')
  @HttpCode(HttpStatus.OK)
  @ApiOkResponse({ type: CreateUserDto, description: 'Usuarios Encontrado' })
  @ApiNotFoundResponse({ description: 'Error, no se encontraron usuarios' })
  @UseGuards(AbilityGuard)
 @CheckAbilty(new ManageReadAbility())
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  @ApiOkResponse({ type: CreateUserDto, description: 'Usuario Encontrado' })
  @ApiNotFoundResponse({ description: 'Error, no se encontro al usuario' })
  @UseGuards(AbilityGuard)
  @CheckAbilty(new ManageReadAbility())
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }

  @Get(':email')
  @HttpCode(HttpStatus.OK)
  @ApiOkResponse({ type: CreateUserDto, description: 'Usuario Encontrado' })
  @ApiNotFoundResponse({ description: 'Error, no se encontro al usuario' })
  @UseGuards(AbilityGuard)
  @CheckAbilty(new ManageReadAbility())
  findByEmail(@Param('email') email: string) {
    return this.userService.findByEmail(email);
  }

  @Patch(':id')
  @HttpCode(HttpStatus.OK)
  @ApiOkResponse({ type: CreateUserDto, description: 'Usuario Actualizado' })
  @ApiNotFoundResponse({ description: 'Error, no se encontro al usuario' })
  @UseGuards(AbilityGuard)
  @CheckAbilty(new ManageReadAbility())
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.OK)
  @ApiOkResponse({ description: 'Usuario Eliminado' })
  @ApiNotFoundResponse({ description: 'Error, no se encontro al usuario' })
  @UseGuards(AbilityGuard)
  @CheckAbilty(new ManageReadAbility())
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}
