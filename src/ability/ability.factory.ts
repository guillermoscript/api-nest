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
      console.log('admin');
      can(Action.MANAGE, 'all');
      can(Action.CREATE, 'all');
      can(Action.READ, 'all');
      can(Action.UPDATE, 'all');
      can(Action.DELETE, 'all');
    } else if (user.userRole === 'digitalizer') {
      can(Action.READ, User);
      can(Action.CREATE, User);
      can(Action.READ, 'all');
      cannot(Action.UPDATE, 'all').because(
        'You are not allowed to update punk',
      );
      cannot(Action.DELETE, 'all').because(
        'You are not allowed to delete punk',
      );
    } else if (user.userRole === 'dummy') {
      can(Action.READ, 'all');
      can(Action.UPDATE, User, { id: user.id });
      cannot(Action.CREATE, 'all').because('Ay punk ya dumb to create');
      cannot(Action.UPDATE, 'all').because('Ay punk ya dumb to update');
      cannot(Action.DELETE, 'all').because('Ay punk ya dumb to delete');
    }

    return build({
      detectSubjectType: (subject: any) =>
        subject.constructor as ExtractSubjectType<Subjects>,
    });
  }
}
