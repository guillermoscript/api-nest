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
import { NotificationsService } from './notifications.service';
import { CreateNotificationDto } from './dto/create-notification.dto';
import { UpdateNotificationDto } from './dto/update-notification.dto';

@UseGuards(JwtGuard)
@ApiTags('Notifications')
@Controller('notifications')
export class NotificationsController {
 constructor(private readonly notificationsService: NotificationsService) {}

 @Post()
 @HttpCode(HttpStatus.CREATED)
 @ApiOkResponse()
 @ApiForbiddenResponse()
 @ApiUnauthorizedResponse()
 @UseGuards(AbilityGuard)
 @CheckAbilty({ action: Action.MANAGE, subject: 'all' })
 create(@Body() createNotificationDto: CreateNotificationDto) {
   return this.notificationsService.create(createNotificationDto);
 }

 @Get()
 @HttpCode(HttpStatus.OK)
 @ApiOkResponse()
 @ApiNotFoundResponse()
 @UseGuards(AbilityGuard)
 @CheckAbilty(new ManageReadAbility())
 findAll() {
   return this.notificationsService.findAll();
 }

 @Get(':id')
 @HttpCode(HttpStatus.OK)
 @Get('/:id')
 @ApiOkResponse()
 @ApiNotFoundResponse()
 @UseGuards(AbilityGuard)
 @CheckAbilty(new ManageReadAbility())
 findOne(@Param('id') id: string) {
   return this.notificationsService.findOne(+id);
 }

 @Patch(':id')

 @HttpCode(HttpStatus.OK)
 @ApiOkResponse()
 @ApiNotFoundResponse()
 @UseGuards(AbilityGuard)
 @CheckAbilty(new ManageReadAbility())
 update(@Param('id') id: string, @Body() updateNotificationDto: UpdateNotificationDto) {
   return this.notificationsService.update(+id, updateNotificationDto);
 }

 @Delete(':id')
 @HttpCode(HttpStatus.OK)
 @ApiOkResponse()
 @ApiNotFoundResponse()
 @UseGuards(AbilityGuard)
 @CheckAbilty(new ManageReadAbility())
 remove(@Param('id') id: string) {
   return this.notificationsService.remove(+id);
 }
}


