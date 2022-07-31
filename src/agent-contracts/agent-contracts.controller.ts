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
import { AgentContractsService } from './agent-contracts.service';
import { CreateAgentContractDto } from './dto/create-agent-contract.dto';
import { UpdateAgentContractDto } from './dto/update-agent-contract.dto';

@UseGuards(JwtGuard)
@ApiTags('Agent Contracts')
@Controller('agent-contracts')
export class AgentContractsController {
  constructor(private readonly agentContractsService: AgentContractsService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiOkResponse()
  @ApiForbiddenResponse()
  @ApiUnauthorizedResponse()
  @UseGuards(AbilityGuard)
  @CheckAbilty({ action: Action.MANAGE, subject: 'all' })
  create(@Body() createAgentContractDto: CreateAgentContractDto) {
    return this.agentContractsService.create(createAgentContractDto);
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  @ApiOkResponse()
  @ApiNotFoundResponse()
  @UseGuards(AbilityGuard)
  @CheckAbilty(new ManageReadAbility())
  findAll() {
    return this.agentContractsService.findAll();
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  @Get('/:id')
  @ApiOkResponse()
  @ApiNotFoundResponse()
  @UseGuards(AbilityGuard)
  @CheckAbilty(new ManageReadAbility())
  findOne(@Param('id') id: string) {
    return this.agentContractsService.findOne(+id);
  }

  @Patch(':id')

  @HttpCode(HttpStatus.OK)
  @ApiOkResponse()
  @ApiNotFoundResponse()
  @UseGuards(AbilityGuard)
  @CheckAbilty(new ManageReadAbility())
  update(@Param('id') id: string, @Body() updateAgentContractDto: UpdateAgentContractDto) {
    return this.agentContractsService.update(+id, updateAgentContractDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.OK)
  @ApiOkResponse()
  @ApiNotFoundResponse()
  @UseGuards(AbilityGuard)
  @CheckAbilty(new ManageReadAbility())
  remove(@Param('id') id: string) {
    return this.agentContractsService.remove(+id);
  }
}
