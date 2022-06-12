import { PrismaClient } from '@prisma/client';
// import chalk from 'chalk';
import {
  createRandomAddresses,
  createRandomCity,
  createRandomClients,
  createRandomCompanies,
  createRandomCountries,
  //   createRandomPersons,
  createRandomContinent,
  createRandomCountryStates,
  //  createRandomAgents,
  //   createRandomUsers,
  createRandomDocumentsTypes,
  createRandomPeriods,
  createSubRandomBranchs,
  //   createRandomOrderDetails,
  createRandomBranch,
  createRandomPolicyStatus,
  createRandomRelationPolicyStatus,
  createRandomPeriodicitys,
  createRandomInsuranceCarriers,
  //  createRandomCurrencies,
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
    //  const Currencies = createRandomCurrencies();

    await prisma.continents.createMany({
      data: Continent,
    });
    console.info('continten created');

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

    // await prisma.currencies.createMany({
    //   data: Currencies,
    // });
    // console.info('Currencies created');

    for (let index = min; index < max + 1; index++) {
      const randomCities = createRandomCity(min, max);
      const randomAddresses = createRandomAddresses(min, max);
      // const randomAgencies = createRandomAgencies();
      // const randomAgents = createRandomAgents(min, max);
      const randomClients = createRandomClients(min, max);
      const randomCompanies = createRandomCompanies();
      const randomCountrys = createRandomCountries();
      const randomCountryStates = createRandomCountryStates(min, max);
      // const randomUsers = createRandomUsers();
      const randomInsuranceCarriers = createRandomInsuranceCarriers();
      const randomPeriods = createRandomPeriods();
      const randomSubBranchs = createSubRandomBranchs();
      //   const randomOrderDetails = createRandomOrderDetails(min, max);

      await prisma.insuranceCarriers.create({
        data: randomInsuranceCarriers,
      });
      console.info('insuranceCarriers created');

      await prisma.companies.create({
        data: randomCompanies,
      });
      console.info('randomCompanies created');

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
              // gender: randomClients.gender,
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

      await prisma.countries.create({
        data: randomCountrys,
      });
      console.info('contry created');

      await prisma.countryStates.create({
        data: {
          //   countryId: randomCountryStates.countryId,
          name: randomCountryStates.name,
          Countries: {
            connect: {
              id: index,
            },
          },
        },
      });
      console.info('randomCountryStates created');

      await prisma.cities.create({
        data: {
          name: randomCities.name,
          CountryStates: {
            connect: {
              id: index,
            },
          },
        },
      });
      console.info('cities created');

      await prisma.addresses.create({
        data: {
          residence: randomAddresses.residence,
          street: randomAddresses.street,
          GPS: randomAddresses.GPS,
          Cities: {
            connect: {
              id: index,
            },
          },
        },
      });
      console.info('addresses created');

      await prisma.periods.create({
        data: randomPeriods,
      });
      console.info('randomPeriods created');

      await prisma.subBranchs.create({
        data: randomSubBranchs,
      });
      console.info('randomSubBranchs created');

      //   await prisma.agents.create({
      //     data: {
      //       Persons: {
      //         create: {
      //           name: randomAgents.name,
      //           lastName: randomAgents.lastName,
      //           email: randomAgents.email,
      //         },
      //       },
      //     },
      //   });
      //   console.info(('randomAgents created') );

      //   await prisma.orderDetails.create({
      //     data: randoOr,
      //   });
      //   console.info(('randomAgents c)reated,);
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
