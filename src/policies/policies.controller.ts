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
import { PoliciesService } from './policies.service';
import { CreatePolicyClientDto } from './dto/create-policy-client.dto';
import { UpdatePolicyClientDto } from './dto/update-policy-client.dto';
import { CreatePolicyVehicleDto } from './dto/create-policy-vehicle.dto';
import { CreatePolicyTravelDto } from './dto/create-policy-travel.dto';
import { CreatePolicyPatrimonialDto } from './dto/create-policy-patrimonial.dto';
import { UpdatePolicyVehicleDto } from './dto/update-policy-vehicle.dto';
import { UpdatePolicyPatrimonialDto } from './dto/update-policy-patrimonial.dto';
import { UpdatePolicyTravelDto } from './dto/update-policy-travel.dto';

@UseGuards(JwtGuard)
@ApiTags('Policies')
@Controller('policies')
export class PoliciesController {
  constructor(private readonly policiesService: PoliciesService) {}

  @Post('/')
  @HttpCode(HttpStatus.CREATED)
  @ApiOkResponse()
  @ApiForbiddenResponse({ description: 'El numero de poliza ingresado ya existe' })
  @ApiUnauthorizedResponse()
  @UseGuards(AbilityGuard)
  @CheckAbilty({ action: Action.MANAGE, subject: 'all' })
  createPolicyClient(@Body() createPolicyClientDto: CreatePolicyClientDto) {
    return this.policiesService.createPolicyClient(createPolicyClientDto);
  }

  @Post('/vehicle')
  @HttpCode(HttpStatus.CREATED)
  @ApiOkResponse()
  @ApiForbiddenResponse()
  @ApiUnauthorizedResponse()
  @UseGuards(AbilityGuard)
  @CheckAbilty({ action: Action.MANAGE, subject: 'all' })
  createPolicyVehicle(@Body() createPolicyVehicleDto: CreatePolicyVehicleDto) {
    return this.policiesService.createPolicyVehicle(createPolicyVehicleDto);
  }

  @Post('/travel')
  @HttpCode(HttpStatus.CREATED)
  @ApiOkResponse()
  @ApiForbiddenResponse()
  @ApiUnauthorizedResponse()
  @UseGuards(AbilityGuard)
  @CheckAbilty({ action: Action.MANAGE, subject: 'all' })
  createPolicyTravel(@Body() createPolicyTravelDto: CreatePolicyTravelDto) {
    return this.policiesService.createPolicyTravel(createPolicyTravelDto);
  }

  @Post('/patrimonial')
  @HttpCode(HttpStatus.CREATED)
  @ApiOkResponse()
  @ApiForbiddenResponse()
  @ApiUnauthorizedResponse()
  @UseGuards(AbilityGuard)
  @CheckAbilty({ action: Action.MANAGE, subject: 'all' })
  createPolicyPatrimonial(
    @Body() createPolicyPatrimonialDto: CreatePolicyPatrimonialDto,
  ) {
    return this.policiesService.createPolicyPatrimonial(
      createPolicyPatrimonialDto,
    );
  }

  @Get('/')
  @HttpCode(HttpStatus.OK)
  @ApiOkResponse()
  @ApiNotFoundResponse()
  @UseGuards(AbilityGuard)
  @CheckAbilty(new ManageReadAbility())
  findAll() {
    return this.policiesService.findAll();
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  @Get('/:id')
  @ApiOkResponse()
  @ApiNotFoundResponse()
  @UseGuards(AbilityGuard)
  @CheckAbilty(new ManageReadAbility())
  findOne(@Param('id') id: string) {
    return this.policiesService.findOne(+id);
  }

  @Get('/function/count')
  @HttpCode(HttpStatus.OK)
  @ApiOkResponse()
  @ApiNotFoundResponse()
  @UseGuards(AbilityGuard)
  @CheckAbilty(new ManageReadAbility())
  countPolicy() {
    return this.policiesService.countPolicy();
  }

  @Get('/function/sum/insured')
  @HttpCode(HttpStatus.OK)
  @ApiOkResponse()
  @ApiNotFoundResponse()
  @UseGuards(AbilityGuard)
  @CheckAbilty(new ManageReadAbility())
  sumInsured() {
    return this.policiesService.sumInsured();
  }

  @Get('/function/count/cotization')
  @HttpCode(HttpStatus.OK)
  @ApiOkResponse()
  @ApiNotFoundResponse()
  @UseGuards(AbilityGuard)
  @CheckAbilty(new ManageReadAbility())
  countCotization() {
    return this.policiesService.countCotization();
  }

  @Get('/function/count/send')
  @HttpCode(HttpStatus.OK)
  @ApiOkResponse()
  @ApiNotFoundResponse()
  @UseGuards(AbilityGuard)
  @CheckAbilty(new ManageReadAbility())
  countSend() {
    return this.policiesService.countSend();
  }

  @Get('/function/count/paid')
  @HttpCode(HttpStatus.OK)
  @ApiOkResponse()
  @ApiNotFoundResponse()
  @UseGuards(AbilityGuard)
  @CheckAbilty(new ManageReadAbility())
  countPaid() {
    return this.policiesService.countPaid();
  }

  @Get('/reports/insurer')
  @HttpCode(HttpStatus.OK)
  @ApiOkResponse()
  @ApiNotFoundResponse()
  @UseGuards(AbilityGuard)
  @CheckAbilty(new ManageReadAbility())
  InsurerPrimes() {
    return this.policiesService.InsurerPrimes();
  }

  @Get('/reports/client')
  @HttpCode(HttpStatus.OK)
  @ApiOkResponse()
  @ApiNotFoundResponse()
  @UseGuards(AbilityGuard)
  @CheckAbilty(new ManageReadAbility())
  ClientPrimes() {
    return this.policiesService.ClientPrimes();
  }

  @Get('/reports/period')
  @HttpCode(HttpStatus.OK)
  @ApiOkResponse()
  @ApiNotFoundResponse()
  @UseGuards(AbilityGuard)
  @CheckAbilty(new ManageReadAbility())
  PeriodPrimes() {
    return this.policiesService.PeriodPrimes();
  }

  @Get('/function/sum/prime')
  @HttpCode(HttpStatus.OK)
  @ApiOkResponse()
  @ApiNotFoundResponse()
  @UseGuards(AbilityGuard)
  @CheckAbilty(new ManageReadAbility())
  sumPrime() {
    return this.policiesService.sumPrime();
  }

  @Patch(':id')
  @HttpCode(HttpStatus.OK)
  @ApiOkResponse()
  @ApiNotFoundResponse()
  @UseGuards(AbilityGuard)
  @CheckAbilty(new ManageReadAbility())
  updatePolicyClient(
    @Param('id') id: string,
    @Body() UpdatePolicyClientDto: UpdatePolicyClientDto,
  ) {
    return this.policiesService.updatePolicyClient(+id, UpdatePolicyClientDto);
  }

  @Patch('/vehicle/:id')
  @HttpCode(HttpStatus.OK)
  @ApiOkResponse()
  @ApiNotFoundResponse()
  @UseGuards(AbilityGuard)
  @CheckAbilty(new ManageReadAbility())
  updatePolicyVehicle(
    @Param('id') id: string,
    @Body() UpdatePolicyVehicleDto: UpdatePolicyVehicleDto,
  ) {
    return this.policiesService.updatePolicyVehicle(
      +id,
      UpdatePolicyVehicleDto,
    );
  }

  @Patch('/patrimonial/:id')
  @HttpCode(HttpStatus.OK)
  @ApiOkResponse()
  @ApiNotFoundResponse()
  @UseGuards(AbilityGuard)
  @CheckAbilty(new ManageReadAbility())
  updatePolicyPatrimonial(
    @Param('id') id: string,
    @Body() UpdatePolicyPatrimonialDto: UpdatePolicyPatrimonialDto,
  ) {
    return this.policiesService.updatePolicyPatrimonial(
      +id,
      UpdatePolicyPatrimonialDto,
    );
  }

  @Patch('/travel/:id')
  @HttpCode(HttpStatus.OK)
  @ApiOkResponse()
  @ApiNotFoundResponse()
  @UseGuards(AbilityGuard)
  @CheckAbilty(new ManageReadAbility())
  updatePolicyTravel(
    @Param('id') id: string,
    @Body() UpdatePolicyTravelDto: UpdatePolicyTravelDto,
  ) {
    return this.policiesService.updatePolicyTravel(+id, UpdatePolicyTravelDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.OK)
  @ApiOkResponse()
  @ApiNotFoundResponse()
  @UseGuards(AbilityGuard)
  @CheckAbilty(new ManageReadAbility())
  remove(@Param('id') id: string) {
    return this.policiesService.remove(+id);
  }
}
