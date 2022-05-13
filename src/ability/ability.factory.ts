import { Injectable } from '@nestjs/common';
import {
  InferSubjects,
  Ability,
  AbilityBuilder,
  AbilityClass,
  ExtractSubjectType,
} from '@casl/ability';
import { User } from 'src/user/entities/user.entity';

export enum Action {
  CREATE = 'CREATE',
  READ = 'READ',
  UPDATE = 'UPDATE',
  DELETE = 'DELETE',
  MANAGE = 'MANAGE',
}

export type Subjects = InferSubjects<typeof User> | 'all';

export type AppAbility = Ability<[Action, Subjects]>;

@Injectable()
export class AbilityFactory {
  defineAbilityFor(user: User) {
    const { can, cannot, build } = new AbilityBuilder(
      Ability as AbilityClass<AppAbility>,
    );

    if (user.userRole === 'admin') {
      can(Action.MANAGE, 'all');
    } else if (user.userRole === 'digitalizer') {
      can(Action.READ, 'all');
    } else if (user.userRole === 'dummy') {
      can(Action.READ, 'all');
    }

    return build({
      detectSubjectType: (subject: any) =>
        subject.constructor as ExtractSubjectType<Subjects>,
    });
  }
}
