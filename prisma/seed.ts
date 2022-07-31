import { PrismaClient } from '@prisma/client';
// import chalk from 'chalk';
import {
  createRandomAddresses,
  createRandomCities,
  createRandomClients,
  createRandomCountries,
  //   createRandomPersons,
  createRandomContinent,
  createRandomCountryStates,
  createRandomAgents,
    createRandomUsers,
  createRandomDocumentsTypes,
  createRandomPeriods,
  createSubRandomBranchs,
  //   createRandomPolicyDetails,
  createRandomBranch,
  createRandomPolicyStatus,
  createRandomRelationPolicyStatus,
  createRandomPeriodicitys,
  createRandomInsuranceCarriers,
} from './dataSeed';

// import chalk from 'chalk';
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
  const min = 1;
  const max = 20;
  try {
    // los de primer nivel
    const Continent = createRandomContinent();
    const Branch = createRandomBranch();
    const PolicyStatus = createRandomPolicyStatus();
    const RelationPolicyStatus = createRandomRelationPolicyStatus();
    const DocumentsTypes = createRandomDocumentsTypes();
    const Periodicitys = createRandomPeriodicitys();
    const Countries = createRandomCountries();
    const CountryStates = createRandomCountryStates();
    const Cities = createRandomCities();
    const Users = createRandomUsers();

    await prisma.continents.createMany({
      data: Continent,
    });
    console.info('contintent created');

    await prisma.countries.createMany({
      data: Countries,
    });
    console.info('Countries created');

    await prisma.countryStates.createMany({
      data: CountryStates,
    });
    console.info('CountryStates created');

    await prisma.cities.createMany({
      data: Cities,
    });
    console.info('Cities created');

    await prisma.branchTypes.createMany({
      data: Branch,
    });
    console.info('Branch created');

    await prisma.policyStatus.createMany({
      data: PolicyStatus,
    });
    console.info('PolicyStatus created');

    await prisma.relationPolicyStatus.createMany({
      data: RelationPolicyStatus,
    });
    console.info('RelationPolicyStatus created');

    await prisma.documentTypes.createMany({
      data: DocumentsTypes,
    });
    console.info('DocumentsTypes created');

    await prisma.periodicities.createMany({
      data: Periodicitys,
    });
    console.info('Periodicitys created');

    // await prisma.users.createMany({
    //   data: Users,
    // });
    // console.info('Users created');

    // los de segundo nivel
    for (let index = min; index < max + 1; index++) {
      const randomAddresses = createRandomAddresses(min, max);
      const randomAgents = createRandomAgents(min, max);
      const randomClients = createRandomClients(min, max);
      // const randomUsers = createRandomUsers();
      const randomInsuranceCarriers = createRandomInsuranceCarriers();
      // const randomPeriods = createRandomPeriods();
      const randomSubBranchs = createSubRandomBranchs();
      //   const randomPolicyDetails = createRandomPolicyDetails(min, max);

      await prisma.insuranceCarriers.create({
        data: randomInsuranceCarriers,
      });
      console.info('insuranceCarriers created');


      await prisma.clients.create({
        data: {
          civilPolicyStatus: randomClients.civilPolicyStatus,
          company: randomClients.company,
          ocupation: randomClients.ocupation,
          Persons: {
            create: {
              email: randomClients.email,
              name: randomClients.name,
              lastName: randomClients.lastName,
              gender: randomClients.gender,
              birthDate: randomClients.birthDate,
              document: randomClients.document,
              documentTypeId: randomClients.documentTypeId,
              phone: randomClients.phone,
              // AddressId: randomClients.AddressId,
            },
          },
        },
      });
      console.info('randomClients created');

      await prisma.addresses.create({
        data: {
          street: randomAddresses.street,
          Cities: {
            connect: {
              id: 21,
            },
          },
        },
      });
      console.info('addresses created');

      await prisma.subBranchs.create({
        data: randomSubBranchs,
      });
      console.info('randomSubBranchs created');

        await prisma.agents.create({
          data: {
            dummy: randomAgents.dummy,
            Persons: {
              create: {
                email: randomAgents.email,
                name: randomAgents.name,
                lastName: randomAgents.lastName,
                gender: randomAgents.gender,
                birthDate: randomAgents.birthDate,
                document: randomAgents.document,
                documentTypeId: randomAgents.documentTypeId,
                phone: randomAgents.phone,
              },
            },
          },
        });
        console.info(('randomAgents created') );
    }
    console.info('DONEEEEE');
  } catch (e) {
    console.error(e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
};
load();
