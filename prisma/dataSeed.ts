// import {
//   PrismaClient,
//   Clients,
//   Users,
//   Cities,
//   Countries,
//   CountryStates,
//   Continents,
//   Companies,
//   Agencies,
//   Agents,
//   Addresses,
//   Persons,
//   DocumentTypes,
// } from '@prisma/client';

// import faker from '@faker-js/faker';
// import { Person } from 'src/person/entities/person.entity';

// const prisma = new PrismaClient();

// export function createRandomPersons() {
//   const persons = [];
//   for (let i = 0; i < 20; i++) {
//     const person: Person = {
//       id: i,
//       AddressId: i,
//       gender: 'male',
//       birthDate: new Date(faker.date.past()),
//       createdAt: new Date(faker.date.past()),
//       updatedAt: new Date(faker.date.past()),
//       updatedBy: faker.datatype.uuid(),
//       createdBy: faker.datatype.uuid(),
//       softDeletedAt: new Date(faker.date.past()),
//       softDeletedBy: faker.datatype.uuid(),
//     };
//     persons.push(person);
//   }

//   return persons;
// }

// export function createRandomCity() {
//   const Cities = [];
//   for (let i = 0; i < 20; i++) {
//     const city = {
//       id: i,
//       name: faker.address.cityName(),
//       countryStateId: i,
//       createdAt: faker.date.past(),
//       updatedAt: faker.date.past(),
//       updatedBy: faker.datatype.uuid(),
//       createdBy: faker.datatype.uuid(),
//       softDeletedAt: faker.date.past(),
//       softDeletedBy: faker.datatype.uuid(),
//     };
//     Cities.push(city);
//   }

//   return Cities;
// }

// export function createRandomAddresses() {
//   const addresses = [];
//   for (let i = 0; i < 20; i++) {
//     const address = {
//       id: i,
//       Address1: faker.address.streetAddress(),
//       Address2: faker.address.secondaryAddress(),
//       cityId: i,
//       GPS: faker.address.latitude() + ',' + faker.address.longitude(),
//       createdAt: faker.date.past(),
//       updatedAt: faker.date.past(),
//       updatedBy: faker.datatype.uuid(),
//       createdBy: faker.datatype.uuid(),
//       softDeletedAt: faker.date.past(),
//       softDeletedBy: faker.datatype.uuid(),
//     };
//     addresses.push(address);
//   }

//   return addresses;
// }

// export function createRandomCountryStates() {
//   const countryStates = [];
//   for (let i = 0; i < 20; i++) {
//     const countryState = {
//       id: i,
//       name: faker.address.state(),
//       contryId: i,
//       createdAt: faker.date.past(),
//       updatedAt: faker.date.past(),
//       updatedBy: faker.datatype.uuid(),
//       createdBy: faker.datatype.uuid(),
//       softDeletedAt: faker.date.past(),
//       softDeletedBy: faker.datatype.uuid(),
//     };
//     countryStates.push(countryState);
//   }

//   return countryStates;
// }

// export function createRandomCountries() {
//   const countries = [];
//   for (let i = 0; i < 20; i++) {
//     const country = {
//       id: i,
//       countryName: faker.address.country(),
//       continentId: i,
//       createdAt: faker.date.past(),
//       updatedAt: faker.date.past(),
//       updatedBy: faker.datatype.uuid(),
//       createdBy: faker.datatype.uuid(),
//       softDeletedAt: faker.date.past(),
//       softDeletedBy: faker.datatype.uuid(),
//     };
//     countries.push(country);
//   }

//   return countries;
// }

// export function createRandomContinent() {
//   const continents = [];
//   for (let i = 0; i < 20; i++) {
//     const continent = {
//       id: i,
//       name: faker.address.country(),
//       createdAt: faker.date.past(),
//       updatedAt: faker.date.past(),
//       updatedBy: faker.datatype.uuid(),
//       createdBy: faker.datatype.uuid(),
//       softDeletedAt: faker.date.past(),
//       softDeletedBy: faker.datatype.uuid(),
//     };
//     continents.push(continent);
//   }

//   return continents;
// }

// export function createRandomClients() {
//   const clients = [];
//   for (let i = 0; i < 20; i++) {
//     const client = {
//       id: i,
//       personId: i,
//       civilPolicyStatus: 'single',
//       company: faker.company.companyName(),
//       ocupation: faker.name.jobTitle(),
//       createdAt: faker.date.past(),
//       updatedAt: faker.date.past(),
//       updatedBy: faker.datatype.uuid(),
//       createdBy: faker.datatype.uuid(),
//       softDeletedAt: faker.date.past(),
//       softDeletedBy: faker.datatype.uuid(),
//     };
//     clients.push(client);
//   }

//   return clients;
// }

// export function createRandomCompanies() {
//   const companies = [];
//   for (let i = 0; i < 20; i++) {
//     const company = {
//       id: i,
//       socialReason: faker.company.companyName(),
//       economicActivity: faker.finance.amount(),
//       webPage: faker.internet.url(),
//       createdAt: faker.date.past(),
//       updatedAt: faker.date.past(),
//       updatedBy: faker.datatype.uuid(),
//       createdBy: faker.datatype.uuid(),
//       softDeletedAt: faker.date.past(),
//       softDeletedBy: faker.datatype.uuid(),
//     };
//     companies.push(company);
//   }

//   return companies;
// }

// export function createRandomUsers() {
//   const users = [];
//   for (let i = 0; i < 20; i++) {
//     const user = {
//       id: i,
//       personId: i,
//       hashedPassword: faker.internet.password(),
//       createdAt: faker.date.past(),
//       updatedAt: faker.date.past(),
//       updatedBy: faker.datatype.uuid(),
//       createdBy: faker.datatype.uuid(),
//       softDeletedAt: faker.date.past(),
//       softDeletedBy: faker.datatype.uuid(),
//     };
//     users.push(user);
//   }

//   return users;
// }

// export function createRandomAgents() {
//   const agents = [];
//   for (let i = 0; i < 20; i++) {
//     const agent = {
//       id: i,
//       personId: i,
//       AgenciesId: i,
//       createdAt: faker.date.past(),
//       updatedAt: faker.date.past(),
//       // updatedBy: faker.datatype.uuid(),
//       createdBy: faker.datatype.uuid(),
//       softDeletedAt: faker.date.past(),
//       softDeletedBy: faker.datatype.uuid(),
//     };
//     agents.push(agent);
//   }

//   return agents;
// }

// export function createRandomDocumentsTypes() {
//   const documentTypes = [];
//   for (let i = 0; i < 20; i++) {
//     const documentType = {
//       id: i,
//       name: faker.name.jobTitle(),
//       createdAt: faker.date.past(),
//       updatedAt: faker.date.past(),
//       updatedBy: faker.datatype.uuid(),
//       createdBy: faker.datatype.uuid(),
//       softDeletedAt: faker.date.past(),
//       softDeletedBy: faker.datatype.uuid(),
//     };
//     documentTypes.push(documentType);
//   }

//   return documentTypes;
// }

// export function createRandomAgencies() {
//   const agencies = [];
//   for (let i = 0; i < 20; i++) {
//     const agency = {
//       id: i,
//       createdAt: faker.date.past(),
//       updatedAt: faker.date.past(),
//       updatedBy: faker.datatype.uuid(),
//       createdBy: faker.datatype.uuid(),
//       // softDeletedAt: faker.date.past(),
//       // softDeletedBy: faker.datatype.uuid(),
//     };
//     agencies.push(agency);
//   }

//   return agencies;
// }
