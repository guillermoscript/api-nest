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
import { CompaniesModule } from './companies/companies.module';
import { VehiclesModule } from './vehicles/vehicles.module';
import { PatrimonialsModule } from './patrimonials/patrimonials.module';
import { RelationPolicyStatusModule } from './relation-policy-status/relation-policy-status.module';
import { TravelsModule } from './travels/travels.module';
import { DocumentTypesModule } from './document-types/document-types.module';
import { PeriodicitiesModule } from './periodicities/periodicities.module';
import { NotificationsModule } from './notifications/notifications.module';
import { OrderDetailsModule } from './order-details/order-details.module';
import { EntitiesHasPolizasModule } from './entities-has-polizas/entities-has-polizas.module';
import { ClientHasTomadorsModule } from './client-has-tomadors/client-has-tomadors.module';
import { PaymentsModule } from './payments/payments.module';

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
    CompaniesModule,
    VehiclesModule,
    PatrimonialsModule,
    RelationPolicyStatusModule,
    TravelsModule,
    DocumentTypesModule,
    PeriodicitiesModule,
    NotificationsModule,
    OrderDetailsModule,
    EntitiesHasPolizasModule,
    ClientHasTomadorsModule,
    PaymentsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
