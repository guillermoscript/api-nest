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
import { ClientHasAgentsService } from './client-has-agents.service';
import { CreateClientHasAgentDto } from './dto/create-client-has-agent.dto';
import { UpdateClientHasAgentDto } from './dto/update-client-has-agent.dto';

@UseGuards(JwtGuard)
@ApiTags('Client Has Agents')
@Controller('client-has-agents')
export class ClientHasAgentsController {
  constructor(
    private readonly clientHasAgentsService: ClientHasAgentsService,
  ) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiOkResponse()
  @ApiForbiddenResponse()
  @ApiUnauthorizedResponse()
  @UseGuards(AbilityGuard)
  @CheckAbilty({ action: Action.MANAGE, subject: 'all' })
  create(@Body() createClientHasAgentDto: CreateClientHasAgentDto) {
    return this.clientHasAgentsService.create(createClientHasAgentDto);
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  @ApiOkResponse()
  @ApiNotFoundResponse()
  @UseGuards(AbilityGuard)
  @CheckAbilty(new ManageReadAbility())
  findAll() {
    return this.clientHasAgentsService.findAll();
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  @Get('/:id')
  @ApiOkResponse()
  @ApiNotFoundResponse()
  @UseGuards(AbilityGuard)
  @CheckAbilty(new ManageReadAbility())
  findOne(@Param('id') id: string) {
    return this.clientHasAgentsService.findOne(+id);
  }

  @Patch(':id')
  @HttpCode(HttpStatus.OK)
  @ApiOkResponse()
  @ApiNotFoundResponse()
  @UseGuards(AbilityGuard)
  @CheckAbilty(new ManageReadAbility())
  update(
    @Param('id') id: string,
    @Body() updateClientHasAgentDto: UpdateClientHasAgentDto,
  ) {
    return this.clientHasAgentsService.update(+id, updateClientHasAgentDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.OK)
  @ApiOkResponse()
  @ApiNotFoundResponse()
  @UseGuards(AbilityGuard)
  @CheckAbilty(new ManageReadAbility())
  remove(@Param('id') id: string) {
    return this.clientHasAgentsService.remove(+id);
  }
}
