import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { ClientModule } from './client/client.module';
import { AgentsModule } from './agents/agents.module';
import { AbilityModule } from './ability/ability.module';
import { PersonModule } from './person/person.module';
import { InsuranceCarrierModule } from './insurance-carrier/insurance-carrier.module';
import { BranchTypesModule } from './branch-types/branch-types.module';
import { SubBranchsModule } from './sub-branchs/sub-branchs.module';
import { PoliciesModule } from './policies/policies.module';
import { PolicyStatusModule } from './policy-status/policy-status.module';

@Module({
  imports: [
    AuthModule,
    UserModule,
    PrismaModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    ClientModule,
    AgentsModule,
    AbilityModule,
    PersonModule,
    InsuranceCarrierModule,
    BranchTypesModule,
    SubBranchsModule,
    PoliciesModule,
    PolicyStatusModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
