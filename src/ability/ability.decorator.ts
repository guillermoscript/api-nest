import { SetMetadata } from '@nestjs/common';
import { User } from 'src/user/entities/user.entity';
import { Action, Subjects } from './ability.factory';

export interface RequiredRule {
  action: Action;
  subject: Subjects;
}

export const CHECK_ABILITY = 'checkAbility';

export const CheckAbilty = (...requirements: RequiredRule[]) =>
  SetMetadata(CHECK_ABILITY, requirements);

export class ManageAllAbility implements RequiredRule {
  action = Action.MANAGE;
  subject;
}

export class ManageReadAbility implements RequiredRule {
  action = Action.READ;
  subject;
}
