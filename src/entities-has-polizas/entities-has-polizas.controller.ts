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
import { ClientHasPoliciesService } from './entities-has-polizas.service';
import { CreateEntitiesHasPolizaDto } from './dto/create-entities-has-poliza.dto';
import { UpdateEntitiesHasPolizaDto } from './dto/update-entities-has-poliza.dto';

@UseGuards(JwtGuard)
@ApiTags('Entities has Polizas')
@Controller('entities-has-polizas')
export class ClientHasPoliciesController {
  constructor(
    private readonly clientHasPoliciesService: ClientHasPoliciesService,
  ) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiOkResponse()
  @ApiForbiddenResponse()
  @ApiUnauthorizedResponse()
  @UseGuards(AbilityGuard)
  @CheckAbilty({ action: Action.MANAGE, subject: 'all' })
  create(@Body() createEntitiesHasPolizaDto: CreateEntitiesHasPolizaDto) {
    return this.clientHasPoliciesService.create(createEntitiesHasPolizaDto);
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  @ApiOkResponse()
  @ApiNotFoundResponse()
  @UseGuards(AbilityGuard)
  @CheckAbilty(new ManageReadAbility())
  findAll() {
    return this.clientHasPoliciesService.findAll();
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  @Get('/:id')
  @ApiOkResponse()
  @ApiNotFoundResponse()
  @UseGuards(AbilityGuard)
  @CheckAbilty(new ManageReadAbility())
  findOne(@Param('id') id: string) {
    return this.clientHasPoliciesService.findOne(+id);
  }

  @Patch(':id')
  @HttpCode(HttpStatus.OK)
  @ApiOkResponse()
  @ApiNotFoundResponse()
  @UseGuards(AbilityGuard)
  @CheckAbilty(new ManageReadAbility())
  update(
    @Param('id') id: string,
    @Body() updateEntitiesHasPolizaDto: UpdateEntitiesHasPolizaDto,
  ) {
    return this.clientHasPoliciesService.update(
      +id,
      updateEntitiesHasPolizaDto,
    );
  }

  @Delete(':id')
  @HttpCode(HttpStatus.OK)
  @ApiOkResponse()
  @ApiNotFoundResponse()
  @UseGuards(AbilityGuard)
  @CheckAbilty(new ManageReadAbility())
  remove(@Param('id') id: string) {
    return this.clientHasPoliciesService.remove(+id);
  }
}
