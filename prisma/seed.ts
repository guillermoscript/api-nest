import { PrismaClient } from '@prisma/client';
import {
  createRandomAddresses,
  createRandomAgencies,
  createRandomCity,
  createRandomClients,
  createRandomCompanies,
  createRandomCountries,
  createRandomEntities,
  createRandomPersons,
  createRandomContinent,
  createRandomCountryStates,
  createRandomAgents,
  createRandomUsers,
  createRandomDocumentsTypes,
} from './dataSeed';

const prisma = new PrismaClient();

const load = async () => {
  // await prisma.entities.deleteMany({});
  // await prisma.persons.deleteMany({});
  // await prisma.addresses.deleteMany({});
  // await prisma.agencies.deleteMany({});
  // await prisma.clients.deleteMany({});
  // await prisma.companies.deleteMany({});
  // await prisma.countries.deleteMany({});
  // await prisma.continents.deleteMany({});
  // await prisma.countryStates.deleteMany({});
  // await prisma.agents.deleteMany({});
  // await prisma.users.deleteMany({});

  try {
    const randomEntities = createRandomEntities();
    const randomPersons = createRandomPersons();
    const randomCities = createRandomCity();
    const randomAddresses = createRandomAddresses();
    const randomAgencies = createRandomAgencies();
    const randomAgents = createRandomAgencies();
    const randomClients = createRandomClients();
    const randomCompanies = createRandomCompanies();
    const randomCountrys = createRandomCountries();
    const randomContinents = createRandomContinent();
    const randomCountryStates = createRandomCountryStates();
    const randomUsers = createRandomUsers();
    const randomDocumentsTypes = createRandomDocumentsTypes();

    console.log('Creating Entities');

    await prisma.documentTypes.createMany({
      data: randomDocumentsTypes,
    });

    await prisma.entities.createMany({
      data: randomEntities,
    });

    await prisma.continents.createMany({
      data: randomContinents,
    });

    await prisma.countries.createMany({
      data: randomCountrys,
    });

    await prisma.countryStates.createMany({
      data: randomCountryStates,
    });

    await prisma.cities.createMany({
      data: randomCities,
    });
    await prisma.addresses.createMany({
      data: randomAddresses,
    });
    await prisma.persons.createMany({
      data: randomPersons,
    });
    await prisma.agencies.createMany({
      data: randomAgencies,
    });
    await prisma.clients.createMany({
      data: randomClients,
    });
    await prisma.companies.createMany({
      data: randomCompanies,
    });
    await prisma.users.createMany({
      data: randomUsers,
    });
    await prisma.agents.createMany({
      data: randomAgents,
    });

    console.log('Creating Entities Done');
  } catch (e) {
    console.error(e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
};
load();
