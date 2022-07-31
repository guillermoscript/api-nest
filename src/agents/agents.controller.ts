import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import {
  ApiForbiddenResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { CheckAbilty, ManageReadAbility } from 'src/ability/ability.decorator';
import { Action } from 'src/ability/ability.factory';
import { AbilityGuard } from 'src/ability/ability.guard';
import { JwtGuard } from 'src/auth/guard';
import { AgentsService } from './agents.service';
import { CreateAgentDto } from './dto/create-agent.dto';
import { UpdateAgentDto } from './dto/update-agent.dto';

@UseGuards(JwtGuard)
@ApiTags('Agents')
@Controller('agents')
export class AgentsController {
  constructor(private readonly agentsService: AgentsService) {}

  @Post('/')
  @HttpCode(HttpStatus.CREATED)
  @ApiOkResponse({
    type: CreateAgentDto,
    description: 'Agente ha sido creado con exito',
  })
  @ApiForbiddenResponse({
    description: 'Prohibido, puede que los datos ya existan',
  })
  @ApiUnauthorizedResponse({ description: 'No autorizado' })
  @UseGuards(AbilityGuard)
  @CheckAbilty({ action: Action.MANAGE, subject: 'all' })
  postAgent(@Body() dto: CreateAgentDto) {
    return this.agentsService.postAgent(dto);
  }

  @Get('/')
  @HttpCode(HttpStatus.OK)
  @ApiOkResponse({ type: CreateAgentDto, description: 'Agente encontrado' })
  @ApiNotFoundResponse({ description: 'Agente no encontrado' })
  @UseGuards(AbilityGuard)
  @CheckAbilty(new ManageReadAbility())
  findAll() {
    return this.agentsService.findAll();
  }

  @Get('/:id')
  @HttpCode(HttpStatus.OK)
  @ApiOkResponse({ type: CreateAgentDto, description: 'Agente encontrado' })
  @ApiNotFoundResponse({ description: 'Agente no encontrado' })
  @UseGuards(AbilityGuard)
  @CheckAbilty(new ManageReadAbility())
  findOne(@Param('id') id: string) {
    return this.agentsService.findOne(+id);
  }

  @Patch(':id')
  @HttpCode(HttpStatus.OK)
  @ApiOkResponse()
  @ApiNotFoundResponse()
  @UseGuards(AbilityGuard)
  @CheckAbilty(new ManageReadAbility())
  update(@Param('id') id: string, @Body() UpdateAgentDto: UpdateAgentDto) {
    return this.agentsService.update(+id, UpdateAgentDto);
  }

  @Delete('/:id')
  @HttpCode(HttpStatus.OK)
  @ApiOkResponse({ type: CreateAgentDto, description: 'Agente Eliminado' })
  @ApiNotFoundResponse({
    description: 'No se encontro el Agente especificado',
  })
  @UseGuards(AbilityGuard)
  @CheckAbilty(new ManageReadAbility())
  remove(@Param('id') id: string) {
    return this.agentsService.remove(+id);
  }
}
