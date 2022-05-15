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
import { BranchTypesService } from './branch-types.service';
import { CreateBranchTypeDto } from './dto/create-branch-type.dto';
import { UpdateBranchTypeDto } from './dto/update-branch-type.dto';

@UseGuards(JwtGuard)
@ApiTags('BranchTypes')
@Controller('branch-types')
export class BranchTypesController {
  constructor(private readonly branchTypesService: BranchTypesService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiOkResponse({ type: CreateBranchTypeDto, description: 'Branc response' })
  @ApiForbiddenResponse()
  @ApiUnauthorizedResponse()
  @UseGuards(AbilityGuard)
  @CheckAbilty({ action: Action.MANAGE, subject: 'all' })
  create(@Body() createBranchTypeDto: CreateBranchTypeDto) {
    return this.branchTypesService.create(createBranchTypeDto);
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  @ApiOkResponse()
  @ApiNotFoundResponse()
  @UseGuards(AbilityGuard)
  @CheckAbilty(new ManageReadAbility())
  findAll() {
    return this.branchTypesService.findAll();
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  @Get('/:id')
  @ApiNotFoundResponse({ description: 'Client not found' })
  @UseGuards(AbilityGuard)
  @CheckAbilty(new ManageReadAbility())
  findOne(@Param('id') id: string) {
    return this.branchTypesService.findOne(+id);
  }

  @Patch(':id')
  @HttpCode(HttpStatus.OK)
  @ApiOkResponse()
  @ApiNotFoundResponse()
  @UseGuards(AbilityGuard)
  @CheckAbilty(new ManageReadAbility())
  update(
    @Param('id') id: string,
    @Body() updateBranchTypeDto: UpdateBranchTypeDto,
  ) {
    return this.branchTypesService.update(+id, updateBranchTypeDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.OK)
  @ApiOkResponse()
  @ApiNotFoundResponse()
  @UseGuards(AbilityGuard)
  @CheckAbilty(new ManageReadAbility())
  remove(@Param('id') id: string) {
    return this.branchTypesService.remove(+id);
  }
}
