  import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { PrismaService } from 'src/prisma/prisma.service';
  import { CreateNotificationDto } from './dto/create-notification.dto';
  import { UpdateNotificationDto } from './dto/update-notification.dto';
  
  @Injectable()
  export class NotificationsService {
    constructor(private prisma: PrismaService) {}

    async create(CreateNotificationDto: CreateNotificationDto) {
      try {
        const notification = await this.prisma.notifications.create({
          data: {
            type: CreateNotificationDto.type,
            notifiableType: CreateNotificationDto.notifiableType,
            notifiableId: CreateNotificationDto.notifiableId,
            data: CreateNotificationDto.data,
            readAt: CreateNotificationDto.readAt,
            Clients:{
              connect:{
                id: CreateNotificationDto.clientId,
              },
            },
          },
        });
  
        return notification;
      } catch (error) {
        if (error instanceof PrismaClientKnownRequestError) {
          if (error.code === 'P2002') {
            throw new ForbiddenException('Error en create notification: documento debe ser unico');
          }
        }
        throw error;
      }
    }
  
    async findAll() {
      try {
        const notifications = await this.prisma.notifications.findMany();
        return notifications;
      } catch (error) {
        console.log(error);
        throw new ForbiddenException('Error en findAll notification');
      }
    }
  
    async findOne(id: number) {
      try {
        const notification = await this.prisma.notifications.findUnique({
          where: {
            id,
          },
        });
        return notification;
      } catch (error) {
        console.log(error);
        throw new ForbiddenException('Error en findOne notification');
      }
    }
  
    async update(
      id: number,
      updatenotificationDto: UpdateNotificationDto,
    ) {
      try {
        const notification = await this.prisma.notifications.update({
          where: {
            id,
          },
          data: {
            type: updatenotificationDto.type,
            notifiableType: updatenotificationDto.notifiableType,
            notifiableId: updatenotificationDto.notifiableId,
            data: updatenotificationDto.data,
            readAt: updatenotificationDto.readAt,
            Clients:{
              connect:{
                id: updatenotificationDto.clientId,
              },
            },
          },
        });
  
        return notification;
      } catch (error) {
        console.log(error);
        throw new ForbiddenException('Error en update notification');
      }
    }
  
    async remove(id: number) {
      try {
        const notification = await this.prisma.notifications.delete({
          where: {
            id,
          },
        });
  
        return notification;
      } catch (error) {
        console.log(error);
        throw new ForbiddenException('Error en remove notification');
      }
    }
  }