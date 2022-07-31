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
import { InsuranceCarrierService } from './insurance-carrier.service';
import { CreateInsuranceCarrierDto } from './dto/create-insurance-carrier.dto';
import { UpdateInsuranceCarrierDto } from './dto/update-insurance-carrier.dto';

@UseGuards(JwtGuard)
@ApiTags('InsuranceCarriers')
@Controller('insurance-carrier')
export class InsuranceCarrierController {
  constructor(
    private readonly insuranceCarrierService: InsuranceCarrierService,
  ) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiOkResponse()
  @ApiForbiddenResponse()
  @ApiUnauthorizedResponse()
  @UseGuards(AbilityGuard)
  @CheckAbilty({ action: Action.MANAGE, subject: 'all' })
  create(@Body() createInsuranceCarrierDto: CreateInsuranceCarrierDto,) {
    return this.insuranceCarrierService.create(createInsuranceCarrierDto);
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  @ApiOkResponse()
  @ApiNotFoundResponse()
  @UseGuards(AbilityGuard)
  @CheckAbilty(new ManageReadAbility())
  findAll() {
    return this.insuranceCarrierService.findAll();
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  @Get('/:id')
  @ApiOkResponse()
  @ApiNotFoundResponse({ description: 'Insurance Carrier not found' })
  @UseGuards(AbilityGuard)
  @CheckAbilty(new ManageReadAbility())
  findOne(@Param('id') id: string) {
    return this.insuranceCarrierService.findOne(+id);
  }

  @Patch(':id')
  @HttpCode(HttpStatus.OK)
  @ApiOkResponse()
  @ApiNotFoundResponse()
  @UseGuards(AbilityGuard)
  @CheckAbilty(new ManageReadAbility())
  update(
    @Param('id') id: string,
    @Body() updateInsuranceCarrierDto: UpdateInsuranceCarrierDto,
  ) {
    return this.insuranceCarrierService.update(+id, updateInsuranceCarrierDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.OK)
  @ApiOkResponse()
  @ApiNotFoundResponse()
  @UseGuards(AbilityGuard)
  @CheckAbilty(new ManageReadAbility())
  remove(@Param('id') id: string) {
    return this.insuranceCarrierService.remove(+id);
  }
}
