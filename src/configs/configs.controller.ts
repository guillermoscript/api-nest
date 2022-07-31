import {
   Controller, Get, Post, Body, Patch, Param, Delete,  HttpCode,
  HttpStatus,
  UseGuards,
 } from '@nestjs/common';
 import { GetUser } from '../auth/decorator/index';
 import { JwtGuard } from 'src/auth/guard';
 import {
   ApiForbiddenResponse,
   ApiNotFoundResponse,
   ApiOkResponse,
   ApiTags,
   ApiUnauthorizedResponse,
 } from '@nestjs/swagger';
 import { Action } from 'src/ability/ability.factory';
 import { CheckAbilty, ManageReadAbility } from 'src/ability/ability.decorator';
 import { AbilityGuard } from 'src/ability/ability.guard';
import { ConfigsService } from './configs.service';
import { CreateConfigDto } from './dto/create-config.dto';
import { UpdateConfigDto } from './dto/update-config.dto';

@UseGuards(JwtGuard)
@ApiTags('Configs')
@Controller('configs')
export class ConfigsController {
  constructor(private readonly configsService: ConfigsService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiOkResponse()
  @ApiForbiddenResponse()
  @ApiUnauthorizedResponse()
  @UseGuards(AbilityGuard)
  @CheckAbilty({ action: Action.MANAGE, subject: 'all' })
  create(@Body() createConfigDto: CreateConfigDto) {
    return this.configsService.create(createConfigDto);
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  @ApiOkResponse()
  @ApiNotFoundResponse()
  @UseGuards(AbilityGuard)
  @CheckAbilty(new ManageReadAbility())
  findAll() {
    return this.configsService.findAll();
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  @Get('/:id')
  @ApiOkResponse()
  @ApiNotFoundResponse()
  @UseGuards(AbilityGuard)
  @CheckAbilty(new ManageReadAbility())
  findOne(@Param('id') id: string) {
    return this.configsService.findOne(+id);
  }

  @Patch(':id')

  @HttpCode(HttpStatus.OK)
  @ApiOkResponse()
  @ApiNotFoundResponse()
  @UseGuards(AbilityGuard)
  @CheckAbilty(new ManageReadAbility())
  update(@Param('id') id: string, @Body() updateConfigDto: UpdateConfigDto) {
    return this.configsService.update(+id, updateConfigDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.OK)
  @ApiOkResponse()
  @ApiNotFoundResponse()
  @UseGuards(AbilityGuard)
  @CheckAbilty(new ManageReadAbility())
  remove(@Param('id') id: string) {
    return this.configsService.remove(+id);
  }
}
