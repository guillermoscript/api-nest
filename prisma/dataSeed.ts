import {
  PrismaClient,
  Clients,
  Users,
  Cities,
  Countries,
  CountryStates,
  Continents,
  Companies,
  Agencies,
  Agents,
  Addresses,
  Persons,
  DocumentTypes,
} from '@prisma/client';

import faker from '@faker-js/faker';
import { Person } from 'src/person/entities/person.entity';
import { CreateCountryDto } from 'src/countries/dto/create-country.dto';
import { CreateCountryStateDto } from 'src/country-states/dto/create-country-state.dto';
import { CreateCityDto } from 'src/cities/dto/create-city.dto';
import { CreateAddressDto } from 'src/addresses/dto/create-address.dto';
import { CreateClientDto } from 'src/client/dto/create-client.dto';
import { CreatePolicyStatusDto } from 'src/policy-status/dto/create-policy-status.dto';
import { CreateBranchTypeDto } from 'src/branch-types/dto/create-branch-type.dto';
import { CreateCompanyDto } from 'src/companies/dto/create-company.dto';
import { CreateAgencyDto } from 'src/agencies/dto/create-agency.dto';
import { CreateAgentDto } from 'src/agents/dto/create-agent.dto';
import { CreateInsuranceCarrierDto } from 'src/insurance-carrier/dto/create-insurance-carrier.dto';
import { CreatePeriodDto } from 'src/periods/dto/create-period.dto';
import { CreateSubBranchDto } from 'src/sub-branchs/dto/create-sub-branch.dto';
import { CreateOrderDetailDto } from 'src/order-details/dto/create-order-detail.dto';

const prisma = new PrismaClient();

function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export function createRandomContinent() {
  const continents = [
    {
      id: 1,
      name: 'America',
    },
    {
      id: 2,
      name: 'Europa',
    },
    {
      id: 3,
      name: 'Africa',
    },
    {
      id: 4,
      name: 'Asia',
    },
    {
      id: 5,
      name: 'Oceania',
    },
  ];
  return continents;
}

export function createRandomBranch() {
  const Branchs = [
    {
      id: 1,
      name: 'Persona',
    },
    {
      id: 2,
      name: 'Vehiculo',
    },
    {
      id: 3,
      name: 'Viaje',
    },
    {
      id: 4,
      name: 'Patrimonial',
    },
  ];
  return Branchs;
}

export function createRandomPolicyStatus() {
  const PolicyStatuses = [
    {
      id: 1,
      policystatusName: 'Cotizada',
      description: '',
    },
    {
      id: 2,
      policystatusName: 'Sin Pagar',
      description: '',
    },
    {
      id: 3,
      policystatusName: 'Pagada',
      description: '',
    },
    {
      id: 4,
      policystatusName: 'Patrimonial',
      description: '',
    },
  ];
  return PolicyStatuses;
}

export function createRandomRelationPolicyStatus() {
  const PolicyStatuses = [
    {
      id: 1,
      relationName: 'Tomador',
    },
    {
      id: 2,
      relationName: 'Beneficiario',
    },

    // TODO este tercero no sabemos cual es
    {
      id: 3,
      relationName: 'Anexado',
    },
  ];
  return PolicyStatuses;
}

export function createRandomDocumentsTypes() {
  const documentTypes = [
    {
      id: 1,
      name: 'Cedula de identidad',
    },
    {
      id: 2,
      name: 'Pasaporte',
    },
    {
      id: 3,
      name: 'RIF',
    },
    {
      id: 4,
      name: 'Licencia de conducir',
    },
  ];
  return documentTypes;
}

export function createRandomPeriodicitys() {
  const randomPeriodicitys = [
    {
      id: 1,
      name: 'mensual',
    },
    {
      id: 2,
      name: 'trimestral',
    },
    {
      id: 3,
      name: 'Semestral',
    },
    {
      id: 4,
      name: 'Anual',
    },
  ];

  return randomPeriodicitys;
}

export function createRandomCity(min, max) {
  const city: CreateCityDto = {
    name: faker.address.cityName(),
    countryStateId: randomIntFromInterval(min, max),
  };
  return city;
}

export function createRandomAddresses(min, max) {
  const address: CreateAddressDto = {
    street: faker.address.streetAddress(),
    residence: faker.address.secondaryAddress(),
    cityId: randomIntFromInterval(min, max),
    GPS: faker.address.latitude() + ',' + faker.address.longitude(),
  };
  return address;
}

export function createRandomCountryStates(min, max) {
  const countryState: CreateCountryStateDto = {
    name: faker.address.state(),
    countryId: randomIntFromInterval(min, max),
  };
  return countryState;
}

export function createRandomCountries() {
  const country: CreateCountryDto = {
    countryName: faker.address.country(),
    continentId: randomIntFromInterval(1, 5),
  };

  return country;
}

export function createRandomClients(min, max) {
  // const client: CreateClientDto = {
  const client = {
    name: faker.name.firstName(),
    lastName: faker.name.lastName(),
    email: faker.internet.email(),
    personId: randomIntFromInterval(min, max),
    civilPolicyStatus: 'single',
    company: faker.company.companyName(),
    ocupation: faker.name.jobTitle(),
  };
  return client;
}

export function createRandomCompanies() {
  const company: CreateCompanyDto = {
    socialReason: faker.company.companyName(),
    economicActivity: faker.finance.amount(),
    webPage: faker.internet.url(),
    document: +faker.random.numeric(),
  };
  return company;
}

// export function createRandomUsers() {
//   const user: = {
//     id: i,
//     personId: i,
//     hashedPassword: faker.internet.password(),
//   };
//   return users;
// }

export function createRandomAgents(min: number, max: number) {
  const agent = {
    personId: randomIntFromInterval(min, max),
    AgenciesId: randomIntFromInterval(min, max),
    name: faker.name.firstName(),
    lastName: faker.name.lastName(),
    email: faker.internet.email(),
  };
  return agent;
}

export function createRandomInsuranceCarriers() {
  const insuranceCarrier: CreateInsuranceCarrierDto = {
    document: +faker.random.numeric(),
    name: faker.company.companyName(),
    phone: faker.phone.phoneNumber(),
    email: faker.internet.email(),
    account: faker.finance.account(4),
    paymentLink: faker.internet.url(),
  };

  return insuranceCarrier;
}

export function createRandomPeriods() {
  const periods: CreatePeriodDto = {
    startDate: faker.date.past(10),
    endDate: faker.date.future(10),
    renewal: +faker.random.numeric(),
  };

  return periods;
}

export function createSubRandomBranchs() {
  const subBranchs: CreateSubBranchDto = {
    name: faker.company.companyName(),
    branchTypeId: randomIntFromInterval(1, 4),
  };

  return subBranchs;
}

export function createRandomOrderDetails(min, max) {
  const orderDetails: CreateOrderDetailDto = {
    ClientHasTomadorId: randomIntFromInterval(min, max),
    periodicityId: randomIntFromInterval(min, max),
    primeValue: +faker.random.numeric(),
    AnnexValue: +faker.random.numeric(),
    comission: +faker.random.numeric(),
    comissionPolicyStatus: faker.datatype.boolean(),
    ValorFinalizacion: +faker.random.numeric(),
    Total: +faker.random.numeric(),
  };
  return orderDetails;
}

// export function createRandomAgencies() {
//   const agencies = [];
//   const agency = {
//     id: i,
//     // softDeletedAt: faker.date.past(),
//     // softDeletedBy: faker.datatype.uuid(),
//   };
//   return agencies;
// }
