import faker from '@faker-js/faker';
// import { Person } from 'src/person/entities/person.entity';
import { CreateCountryDto } from 'src/countries/dto/create-country.dto';
import { CreateCountryStateDto } from 'src/country-states/dto/create-country-state.dto';
import { CreateCityDto } from 'src/cities/dto/create-city.dto';
import { CreateAddressDto } from 'src/addresses/dto/create-address.dto';
// import { CreateClientDto } from 'src/client/dto/create-client.dto';
// import { CreatePolicyStatusDto } from 'src/policy-status/dto/create-policy-status.dto';
// import { CreateBranchTypeDto } from 'src/branch-types/dto/create-branch-type.dto';
import { CreateAgencyDto } from 'src/agencies/dto/create-agency.dto';
// import { CreateAgentDto } from 'src/agents/dto/create-agent.dto';
import { CreateInsuranceCarrierDto } from 'src/insurance-carrier/dto/create-insurance-carrier.dto';
import { CreatePeriodDto } from 'src/periods/dto/create-period.dto';
import { CreateSubBranchDto } from 'src/sub-branchs/dto/create-sub-branch.dto';
import { CreateOrderDetailDto } from 'src/order-details/dto/create-order-detail.dto';

// const prisma = new PrismaClient();

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

export function createRandomCountries() {
  const countries = [
    {
      id: 1,
      continentId: 1,
      countryName: 'Venezuela',
    },
  ];
  return countries;
}

export function createRandomCountryStates() {
  const countrieStates = [
    {
      id: 1,
      countryId: 1,
      name: 'Amazonas',
    },
    {
      id: 2,
      countryId: 1,
      name: 'Anzoátegui',
    },
    {
      id: 3,
      countryId: 1,
      name: 'Apure',
    },
    {
      id: 4,
      countryId: 1,
      name: 'Aragua',
    },
    {
      id: 5,
      countryId: 1,
      name: 'Barinas',
    },
    {
      id: 6,
      countryId: 1,
      name: 'Bolívar',
    },
    {
      id: 7,
      countryId: 1,
      name: 'Carabobo',
    },
    {
      id: 8,
      countryId: 1,
      name: 'Cojedes',
    },
    {
      id: 9,
      countryId: 1,
      name: 'Delta Amacuro',
    },
    {
      id: 10,
      countryId: 1,
      name: 'Distrito Capital',
    },
    {
      id: 11,
      countryId: 1,
      name: 'Falcón',
    },
    {
      id: 12,
      countryId: 1,
      name: 'Guárico',
    },
    {
      id: 13,
      countryId: 1,
      name: 'Lara',
    },
    {
      id: 14,
      countryId: 1,
      name: 'Mérida',
    },
    {
      id: 15,
      countryId: 1,
      name: 'Miranda',
    },
    {
      id: 16,
      countryId: 1,
      name: 'Monagas',
    },
    {
      id: 17,
      countryId: 1,
      name: 'Nueva Esparta',
    },
    {
      id: 18,
      countryId: 1,
      name: 'Portuguesa',
    },
    {
      id: 19,
      countryId: 1,
      name: 'Sucre',
    },
    {
      id: 20,
      countryId: 1,
      name: 'Táchira',
    },
    {
      id: 21,
      countryId: 1,
      name: 'Trujillo',
    },
    {
      id: 22,
      countryId: 1,
      name: 'Vargas',
    },
    {
      id: 23,
      countryId: 1,
      name: 'Yaracuy',
    },
    {
      id: 24,
      countryId: 1,
      name: 'Zulia',
    },
  ];
  return countrieStates;
}

export function createRandomCities() {
  const Cities = [
    { id: 1, countryStateId: 2, name: 'Anaco' },
    { id: 2, countryStateId: 2, name: 'Aragua de Barcelona' },
    { id: 3, countryStateId: 2, name: 'Barcelona' },
    { id: 4, countryStateId: 2, name: 'Clarines' },
    { id: 5, countryStateId: 2, name: 'Valle de Guanape' },
    { id: 6, countryStateId: 2, name: 'Onoto' },
    { id: 7, countryStateId: 2, name: 'Lechería' },
    { id: 8, countryStateId: 2, name: 'Cantaura' },
    { id: 9, countryStateId: 2, name: 'Guanta' },
    { id: 10, countryStateId: 2, name: 'San José de Guanipa' },
    { id: 11, countryStateId: 2, name: 'Soledad' },
    { id: 12, countryStateId: 2, name: 'San Mateo' },
    { id: 13, countryStateId: 2, name: 'El Chaparro' },
    { id: 14, countryStateId: 2, name: 'Pariaguán' },
    { id: 15, countryStateId: 2, name: 'Mapire' },
    { id: 16, countryStateId: 2, name: 'Puerto Píritu' },
    { id: 17, countryStateId: 2, name: 'Píritu' },
    { id: 18, countryStateId: 2, name: 'Boca de Uchire' },
    { id: 19, countryStateId: 2, name: 'Parroquia Santa Ana' },
    { id: 20, countryStateId: 2, name: 'El Tigre' },
    { id: 21, countryStateId: 2, name: 'Puerto la Cruz' },
  ];
  return Cities;
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

export function createRandomCurrencies() {
  const Currencies = [
    {
      id: 1,
      name: 'Bolivar',
      symbol: 'Bs',
    },
    {
      id: 2,
      name: 'Dollar',
      symbol: '$',
    },
  ];
  return Currencies;
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

export function createRandomAddresses(min, max) {
  const address: CreateAddressDto = {
    street: faker.address.streetAddress(),
    residence: faker.address.secondaryAddress(),
    cityId: randomIntFromInterval(min, max),
    GPS: faker.address.latitude() + ',' + faker.address.longitude(),
  };
  return address;
}

// export function createRandomCountryStates(min, max) {
//   const countryState: CreateCountryStateDto = {
//     name: faker.address.state(),
//     countryId: randomIntFromInterval(min, max),
//   };
//   return countryState;
// }

// export function createRandomCountries() {
//   const country: CreateCountryDto = {
//     countryName: faker.address.country(),
//     continentId: randomIntFromInterval(1, 5),
//   };

//   return country;
// }

export function createRandomClients(min, max) {
  // const client: CreateClientDto = {
  const client = {
    name: faker.name.firstName(),
    lastName: faker.name.lastName(),
    document: +faker.random.numeric(7),
    documentTypeId: randomIntFromInterval(1, 4),
    birthDate: faker.date.past(),
    email: faker.internet.email(),
    personId: randomIntFromInterval(min, max),
    civilPolicyStatus: 'single',
    company: faker.company.companyName(),
    ocupation: faker.name.jobTitle(),
    phone: faker.phone.phoneNumber('VE'),
    gender: 'male',
  };
  return client;
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
    document: +faker.random.numeric(6),
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

export function createRandomPolicyDetails(min, max) {
  const policyDetails: CreateOrderDetailDto = {
    ClientHasTomadorId: randomIntFromInterval(min, max),
    periodicityId: randomIntFromInterval(min, max),
    currencyId: randomIntFromInterval(1, 2),
    primeValue: +faker.random.numeric(),
    AnnexValue: +faker.random.numeric(),
    comission: +faker.random.numeric(),
    comissionPolicyStatus: faker.datatype.boolean(),
    ValorFinalizacion: +faker.random.numeric(),
    Total: +faker.random.numeric(),
  };
  return policyDetails;
}

export function createRandomAgencies() {
  const agency: CreateAgencyDto = {
    document: +faker.random.numeric(7),
    name: faker.company.companyName(),
    phone: faker.phone.phoneNumber('+58 414 #######'),
    email: faker.internet.email(),
  };
  return agency;
}
