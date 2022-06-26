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
import { PeriodsModule } from './periods/periods.module';
import { AgenciesModule } from './agencies/agencies.module';
import { CountriesModule } from './countries/countries.module';
import { ContinentsModule } from './continents/continents.module';
import { CountryStatesModule } from './country-states/country-states.module';
import { CitiesModule } from './cities/cities.module';
import { AddressesModule } from './addresses/addresses.module';
import { VehiclesModule } from './vehicles/vehicles.module';
import { PatrimonialsModule } from './patrimonials/patrimonials.module';
import { RelationPolicyStatusModule } from './relation-policy-status/relation-policy-status.module';
import { TravelsModule } from './travels/travels.module';
import { DocumentTypesModule } from './document-types/document-types.module';
import { PeriodicitiesModule } from './periodicities/periodicities.module';
import { PolicyDetailsModule } from './order-details/order-details.module';
import { ClientHasPoliciesModule } from './entities-has-polizas/entities-has-polizas.module';
import { ClientHasTakerModule } from './client-has-tomadors/client-has-tomadors.module';
import { PaymentsModule } from './payments/payments.module';
import { AgentContractsModule } from './agent-contracts/agent-contracts.module';
import { ClientHasAgentsModule } from './client-has-agents/client-has-agents.module';
import { ConfigsModule } from './configs/configs.module';
import { TaxesModule } from './taxes/taxes.module';
import { CurrenciesModule } from './currencies/currencies.module';

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
    PeriodsModule,
    AgenciesModule,
    ContinentsModule,
    CountriesModule,
    CountryStatesModule,
    CitiesModule,
    AddressesModule,
    VehiclesModule,
    PatrimonialsModule,
    RelationPolicyStatusModule,
    TravelsModule,
    DocumentTypesModule,
    PeriodicitiesModule,
    PolicyDetailsModule,
    ClientHasPoliciesModule,
    ClientHasTakerModule,
    PaymentsModule,
    AgentContractsModule,
    ClientHasAgentsModule,
    ConfigsModule,
    TaxesModule,
    CurrenciesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
