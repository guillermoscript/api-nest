import faker from '@faker-js/faker';
// import { Person } from 'src/person/entities/person.entity';
import { CreateCountryDto } from 'src/countries/dto/create-country.dto';
import { CreateCountryStateDto } from 'src/country-states/dto/create-country-state.dto';
import { CreateCityDto } from 'src/cities/dto/create-city.dto';
import { CreateAddressDto } from 'src/addresses/dto/create-address.dto';
// import { CreateClientDto } from 'src/client/dto/create-client.dto';
// import { CreatePolicyStatusDto } from 'src/policy-status/dto/create-policy-status.dto';
// import { CreateBranchTypeDto } from 'src/branch-types/dto/create-branch-type.dto';
// import { CreateAgentDto } from 'src/agents/dto/create-agent.dto';
import { CreateInsuranceCarrierDto } from 'src/insurance-carrier/dto/create-insurance-carrier.dto';
import { CreatePeriodDto } from 'src/periods/dto/create-period.dto';
import { CreateSubBranchDto } from 'src/sub-branchs/dto/create-sub-branch.dto';
import { CreateOrderDetailDto } from 'src/order-details/dto/create-order-detail.dto';
import * as argon from 'argon2';

// const prisma = new PrismaClient();

function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export function createRandomContinent() {
  const continents = [
    {
      id: 1,
      name: 'América',
    },
    {
      id: 2,
      name: 'Europa',
    },
    {
      id: 3,
      name: 'África',
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
        "id": 1,
        "continentId": 4,
        "countryName": "Afganistán"
    },
    {
        "id": 2,
        "continentId": 2,
        "countryName": "Albania"
    },
    {
        "id": 3,
        "continentId": 2,
        "countryName": "Alemania"
    },
    {
        "id": 4,
        "continentId": 2,
        "countryName": "Andorra"
    },
    {
        "id": 5,
        "continentId": 3,
        "countryName": "Angola"
    },
    {
        "id": 6,
        "continentId": 1,
        "countryName": "Antigua y Barbuda"
    },
    {
        "id": 7,
        "continentId": 4,
        "countryName": "Arabia Saudita"
    },
    {
        "id": 8,
        "continentId": 3,
        "countryName": "Argelia"
    },
    {
        "id": 9,
        "continentId": 1,
        "countryName": "Argentina"
    },
    {
        "id": 10,
        "continentId": 4,
        "countryName": "Armenia"
    },
    {
        "id": 11,
        "continentId": 5,
        "countryName": "Australia"
    },
    {
        "id": 12,
        "continentId": 2,
        "countryName": "Austria"
    },
    {
        "id": 13,
        "continentId": 4,
        "countryName": "Azerbaiyán"
    },
    {
        "id": 14,
        "continentId": 1,
        "countryName": "Bahamas"
    },
    {
        "id": 15,
        "continentId": 4,
        "countryName": "Bangladés"
    },
    {
        "id": 16,
        "continentId": 1,
        "countryName": "Barbados"
    },
    {
        "id": 17,
        "continentId": 4,
        "countryName": "Baréin"
    },
    {
        "id": 18,
        "continentId": 2,
        "countryName": "Bélgica"
    },
    {
        "id": 19,
        "continentId": 1,
        "countryName": "Belice"
    },
    {
        "id": 20,
        "continentId": 3,
        "countryName": "Benín"
    },
    {
        "id": 21,
        "continentId": 2,
        "countryName": "Bielorrusia"
    },
    {
        "id": 22,
        "continentId": 4,
        "countryName": "Birmania"
    },
    {
        "id": 23,
        "continentId": 1,
        "countryName": "Bolivia"
    },
    {
        "id": 24,
        "continentId": 2,
        "countryName": "Bosnia-Herzegovina"
    },
    {
        "id": 25,
        "continentId": 3,
        "countryName": "Botsuana"
    },
    {
        "id": 26,
        "continentId": 1,
        "countryName": "Brasil"
    },
    {
        "id": 27,
        "continentId": 4,
        "countryName": "Brunéi"
    },
    {
        "id": 28,
        "continentId": 2,
        "countryName": "Bulgaria"
    },
    {
        "id": 29,
        "continentId": 3,
        "countryName": "Burkina Faso"
    },
    {
        "id": 30,
        "continentId": 3,
        "countryName": "Burundi"
    },
    {
        "id": 31,
        "continentId": 4,
        "countryName": "Bután"
    },
    {
        "id": 32,
        "continentId": 3,
        "countryName": "Cabo Verde"
    },
    {
        "id": 33,
        "continentId": 4,
        "countryName": "Camboya"
    },
    {
        "id": 34,
        "continentId": 3,
        "countryName": "Camerún"
    },
    {
        "id": 35,
        "continentId": 1,
        "countryName": "Canadá"
    },
    {
        "id": 36,
        "continentId": 4,
        "countryName": "Catar"
    },
    {
        "id": 37,
        "continentId": 3,
        "countryName": "Chad"
    },
    {
        "id": 38,
        "continentId": 1,
        "countryName": "Chile"
    },
    {
        "id": 39,
        "continentId": 4,
        "countryName": "China"
    },
    {
        "id": 40,
        "continentId": 2,
        "countryName": "Chipre"
    },
    {
        "id": 41,
        "continentId": 1,
        "countryName": "Colombia"
    },
    {
        "id": 42,
        "continentId": 3,
        "countryName": "Comoras"
    },
    {
        "id": 43,
        "continentId": 3,
        "countryName": "Congo"
    },
    {
        "id": 44,
        "continentId": 4,
        "countryName": "Corea del Norte"
    },
    {
        "id": 45,
        "continentId": 4,
        "countryName": "Corea del Sur"
    },
    {
        "id": 46,
        "continentId": 3,
        "countryName": "Costa de Marfil"
    },
    {
        "id": 47,
        "continentId": 1,
        "countryName": "Costa Rica"
    },
    {
        "id": 48,
        "continentId": 2,
        "countryName": "Croacia"
    },
    {
        "id": 49,
        "continentId": 1,
        "countryName": "Cuba"
    },
    {
        "id": 50,
        "continentId": 2,
        "countryName": "Dinamarca"
    },
    {
        "id": 51,
        "continentId": 1,
        "countryName": "Dominica"
    },
    {
        "id": 52,
        "continentId": 1,
        "countryName": "Ecuador"
    },
    {
        "id": 53,
        "continentId": 3,
        "countryName": "Egipto"
    },
    {
        "id": 54,
        "continentId": 1,
        "countryName": "El Salvador"
    },
    {
        "id": 55,
        "continentId": 4,
        "countryName": "Emiratos Árabes Unidos"
    },
    {
        "id": 56,
        "continentId": 3,
        "countryName": "Eritrea"
    },
    {
        "id": 57,
        "continentId": 2,
        "countryName": "Eslovaquia"
    },
    {
        "id": 58,
        "continentId": 2,
        "countryName": "Eslovenia"
    },
    {
        "id": 59,
        "continentId": 2,
        "countryName": "España"
    },
    {
        "id": 60,
        "continentId": 1,
        "countryName": "Estados Unidos"
    },
    {
        "id": 61,
        "continentId": 2,
        "countryName": "Estonia"
    },
    {
        "id": 62,
        "continentId": 3,
        "countryName": "Esuatini"
    },
    {
        "id": 63,
        "continentId": 3,
        "countryName": "Etiopía"
    },
    {
        "id": 64,
        "continentId": 4,
        "countryName": "Filipinas"
    },
    {
        "id": 65,
        "continentId": 2,
        "countryName": "Finlandia"
    },
    {
        "id": 66,
        "continentId": 5,
        "countryName": "Fiyi"
    },
    {
        "id": 67,
        "continentId": 2,
        "countryName": "Francia"
    },
    {
        "id": 68,
        "continentId": 3,
        "countryName": "Gabón"
    },
    {
        "id": 69,
        "continentId": 3,
        "countryName": "Gambia"
    },
    {
        "id": 70,
        "continentId": 4,
        "countryName": "Georgia"
    },
    {
        "id": 71,
        "continentId": 3,
        "countryName": "Ghana"
    },
    {
        "id": 72,
        "continentId": 1,
        "countryName": "Granada"
    },
    {
        "id": 73,
        "continentId": 2,
        "countryName": "Grecia"
    },
    {
        "id": 74,
        "continentId": 1,
        "countryName": "Guatemala"
    },
    {
        "id": 75,
        "continentId": 3,
        "countryName": "Guinea"
    },
    {
        "id": 76,
        "continentId": 3,
        "countryName": "Guinea Ecuatorial"
    },
    {
        "id": 77,
        "continentId": 3,
        "countryName": "Guinea-Bisáu"
    },
    {
        "id": 78,
        "continentId": 1,
        "countryName": "Guyana"
    },
    {
        "id": 79,
        "continentId": 1,
        "countryName": "Haití"
    },
    {
        "id": 80,
        "continentId": 1,
        "countryName": "Honduras"
    },
    {
        "id": 81,
        "continentId": 2,
        "countryName": "Hungría"
    },
    {
        "id": 82,
        "continentId": 4,
        "countryName": "India"
    },
    {
        "id": 83,
        "continentId": 4,
        "countryName": "Indonesia"
    },
    {
        "id": 84,
        "continentId": 4,
        "countryName": "Irak"
    },
    {
        "id": 85,
        "continentId": 4,
        "countryName": "Irán"
    },
    {
        "id": 86,
        "continentId": 2,
        "countryName": "Irlanda"
    },
    {
        "id": 87,
        "continentId": 2,
        "countryName": "Islandia"
    },
    {
        "id": 88,
        "continentId": 5,
        "countryName": "Islas Marshall"
    },
    {
        "id": 89,
        "continentId": 5,
        "countryName": "Islas Salomón"
    },
    {
        "id": 90,
        "continentId": 4,
        "countryName": "Israel"
    },
    {
        "id": 91,
        "continentId": 2,
        "countryName": "Italia"
    },
    {
        "id": 92,
        "continentId": 1,
        "countryName": "Jamaica"
    },
    {
        "id": 93,
        "continentId": 4,
        "countryName": "Japón"
    },
    {
        "id": 94,
        "continentId": 4,
        "countryName": "Jordania"
    },
    {
        "id": 95,
        "continentId": 4,
        "countryName": "Kazajistán"
    },
    {
        "id": 96,
        "continentId": 3,
        "countryName": "Kenia"
    },
    {
        "id": 97,
        "continentId": 4,
        "countryName": "Kirguistán"
    },
    {
        "id": 98,
        "continentId": 5,
        "countryName": "Kiribati"
    },
    {
        "id": 99,
        "continentId": 2,
        "countryName": "Kosovo"
    },
    {
        "id": 100,
        "continentId": 4,
        "countryName": "Kuwait"
    },
    {
        "id": 101,
        "continentId": 4,
        "countryName": "Laos"
    },
    {
        "id": 102,
        "continentId": 3,
        "countryName": "Lesoto"
    },
    {
        "id": 103,
        "continentId": 2,
        "countryName": "Letonia"
    },
    {
        "id": 104,
        "continentId": 4,
        "countryName": "Líbano"
    },
    {
        "id": 105,
        "continentId": 3,
        "countryName": "Liberia"
    },
    {
        "id": 106,
        "continentId": 3,
        "countryName": "Libia"
    },
    {
        "id": 107,
        "continentId": 2,
        "countryName": "Liechtenstein"
    },
    {
        "id": 108,
        "continentId": 2,
        "countryName": "Lituania"
    },
    {
        "id": 109,
        "continentId": 2,
        "countryName": "Luxemburgo"
    },
    {
        "id": 110,
        "continentId": 2,
        "countryName": "Macedonia del Norte"
    },
    {
        "id": 111,
        "continentId": 3,
        "countryName": "Madagascar"
    },
    {
        "id": 112,
        "continentId": 4,
        "countryName": "Malasia"
    },
    {
        "id": 113,
        "continentId": 3,
        "countryName": "Malaui"
    },
    {
        "id": 114,
        "continentId": 4,
        "countryName": "Maldivas"
    },
    {
        "id": 115,
        "continentId": 3,
        "countryName": "Malí"
    },
    {
        "id": 116,
        "continentId": 2,
        "countryName": "Malta"
    },
    {
        "id": 117,
        "continentId": 3,
        "countryName": "Marruecos"
    },
    {
        "id": 118,
        "continentId": 3,
        "countryName": "Mauricio"
    },
    {
        "id": 119,
        "continentId": 3,
        "countryName": "Mauritania"
    },
    {
        "id": 120,
        "continentId": 1,
        "countryName": "México"
    },
    {
        "id": 121,
        "continentId": 5,
        "countryName": "Micronesia"
    },
    {
        "id": 122,
        "continentId": 2,
        "countryName": "Moldavia"
    },
    {
        "id": 123,
        "continentId": 2,
        "countryName": "Mónaco"
    },
    {
        "id": 124,
        "continentId": 4,
        "countryName": "Mongolia"
    },
    {
        "id": 125,
        "continentId": 2,
        "countryName": "Montenegro"
    },
    {
        "id": 126,
        "continentId": 3,
        "countryName": "Mozambique"
    },
    {
        "id": 127,
        "continentId": 3,
        "countryName": "Namibia"
    },
    {
        "id": 128,
        "continentId": 5,
        "countryName": "Nauru"
    },
    {
        "id": 129,
        "continentId": 4,
        "countryName": "Nepal"
    },
    {
        "id": 130,
        "continentId": 1,
        "countryName": "Nicaragua"
    },
    {
        "id": 131,
        "continentId": 3,
        "countryName": "Níger"
    },
    {
        "id": 132,
        "continentId": 3,
        "countryName": "Nigeria"
    },
    {
        "id": 133,
        "continentId": 2,
        "countryName": "Noruega"
    },
    {
        "id": 134,
        "continentId": 5,
        "countryName": "Nueva Zelanda"
    },
    {
        "id": 135,
        "continentId": 4,
        "countryName": "Omán"
    },
    {
        "id": 136,
        "continentId": 2,
        "countryName": "Países Bajos"
    },
    {
        "id": 137,
        "continentId": 4,
        "countryName": "Pakistán"
    },
    {
        "id": 138,
        "continentId": 5,
        "countryName": "Palaos"
    },
    {
        "id": 139,
        "continentId": 4,
        "countryName": "Palestina"
    },
    {
        "id": 140,
        "continentId": 1,
        "countryName": "Panamá"
    },
    {
        "id": 141,
        "continentId": 5,
        "countryName": "Papúa Nueva Guinea"
    },
    {
        "id": 142,
        "continentId": 1,
        "countryName": "Paraguay"
    },
    {
        "id": 143,
        "continentId": 1,
        "countryName": "Perú"
    },
    {
        "id": 144,
        "continentId": 2,
        "countryName": "Polonia"
    },
    {
        "id": 145,
        "continentId": 2,
        "countryName": "Portugal"
    },
    {
        "id": 146,
        "continentId": 2,
        "countryName": "Reino Unido"
    },
    {
        "id": 147,
        "continentId": 3,
        "countryName": "República Centroafricana"
    },
    {
        "id": 148,
        "continentId": 2,
        "countryName": "República Checa"
    },
    {
        "id": 149,
        "continentId": 3,
        "countryName": "República Democrática del Congo"
    },
    {
        "id": 150,
        "continentId": 1,
        "countryName": "República Dominicana"
    },
    {
        "id": 151,
        "continentId": 3,
        "countryName": "Ruanda"
    },
    {
        "id": 152,
        "continentId": 2,
        "countryName": "Rumania"
    },
    {
        "id": 153,
        "continentId": 2,
        "countryName": "Rusia"
    },
    {
        "id": 154,
        "continentId": 5,
        "countryName": "Samoa"
    },
    {
        "id": 155,
        "continentId": 1,
        "countryName": "San Cristóbal y Nieves"
    },
    {
        "id": 156,
        "continentId": 2,
        "countryName": "San Marino"
    },
    {
        "id": 157,
        "continentId": 1,
        "countryName": "San Vicente y las Granadinas"
    },
    {
        "id": 158,
        "continentId": 1,
        "countryName": "Santa Lucía"
    },
    {
        "id": 159,
        "continentId": 3,
        "countryName": "Santo Tomé y Príncipe"
    },
    {
        "id": 160,
        "continentId": 3,
        "countryName": "Senegal"
    },
    {
        "id": 161,
        "continentId": 2,
        "countryName": "Serbia"
    },
    {
        "id": 162,
        "continentId": 3,
        "countryName": "Seychelles"
    },
    {
        "id": 163,
        "continentId": 3,
        "countryName": "Sierra Leona"
    },
    {
        "id": 164,
        "continentId": 4,
        "countryName": "Singapur"
    },
    {
        "id": 165,
        "continentId": 4,
        "countryName": "Siria"
    },
    {
        "id": 166,
        "continentId": 3,
        "countryName": "Somalia"
    },
    {
        "id": 167,
        "continentId": 4,
        "countryName": "Sri Lanka"
    },
    {
        "id": 168,
        "continentId": 3,
        "countryName": "Sudáfrica"
    },
    {
        "id": 169,
        "continentId": 3,
        "countryName": "Sudán"
    },
    {
        "id": 170,
        "continentId": 3,
        "countryName": "Sudán del Sur"
    },
    {
        "id": 171,
        "continentId": 2,
        "countryName": "Suecia"
    },
    {
        "id": 172,
        "continentId": 2,
        "countryName": "Suiza"
    },
    {
        "id": 173,
        "continentId": 1,
        "countryName": "Surinam"
    },
    {
        "id": 174,
        "continentId": 4,
        "countryName": "Tailandia"
    },
    {
        "id": 175,
        "continentId": 4,
        "countryName": "Taiwán"
    },
    {
        "id": 176,
        "continentId": 3,
        "countryName": "Tanzania"
    },
    {
        "id": 177,
        "continentId": 4,
        "countryName": "Tayikistán"
    },
    {
        "id": 178,
        "continentId": 5,
        "countryName": "Timor Oriental"
    },
    {
        "id": 179,
        "continentId": 3,
        "countryName": "Togo"
    },
    {
        "id": 180,
        "continentId": 5,
        "countryName": "Tonga"
    },
    {
        "id": 181,
        "continentId": 1,
        "countryName": "Trinidad y Tobago"
    },
    {
        "id": 182,
        "continentId": 3,
        "countryName": "Túnez"
    },
    {
        "id": 183,
        "continentId": 4,
        "countryName": "Turkmenistán"
    },
    {
        "id": 184,
        "continentId": 4,
        "countryName": "Turquía"
    },
    {
        "id": 185,
        "continentId": 5,
        "countryName": "Tuvalu"
    },
    {
        "id": 186,
        "continentId": 2,
        "countryName": "Ucrania"
    },
    {
        "id": 187,
        "continentId": 3,
        "countryName": "Uganda"
    },
    {
        "id": 188,
        "continentId": 1,
        "countryName": "Uruguay"
    },
    {
        "id": 189,
        "continentId": 4,
        "countryName": "Uzbekistán"
    },
    {
        "id": 190,
        "continentId": 5,
        "countryName": "Vanuatu"
    },
    {
        "id": 191,
        "continentId": 2,
        "countryName": "Vaticano"
    },
    {
        "id": 192,
        "continentId": 1,
        "countryName": "Venezuela"
    },
    {
        "id": 193,
        "continentId": 4,
        "countryName": "Vietnam"
    },
    {
        "id": 194,
        "continentId": 4,
        "countryName": "Yemen"
    },
    {
        "id": 195,
        "continentId": 3,
        "countryName": "Yibuti"
    },
    {
        "id": 196,
        "continentId": 3,
        "countryName": "Zambia"
    },
    {
        "id": 197,
        "continentId": 3,
        "countryName": "Zimbabue"
    }
]
  return countries;
}

export function createRandomCountryStates() {
  const countrieStates = [
    {
      id: 1,
      countryId: 192,
      name: 'Amazonas',
    },
    {
      id: 2,
      countryId: 192,
      name: 'Anzoátegui',
    },
    {
      id: 3,
      countryId: 192,
      name: 'Apure',
    },
    {
      id: 4,
      countryId: 192,
      name: 'Aragua',
    },
    {
      id: 5,
      countryId: 192,
      name: 'Barinas',
    },
    {
      id: 6,
      countryId: 192,
      name: 'Bolívar',
    },
    {
      id: 7,
      countryId: 192,
      name: 'Carabobo',
    },
    {
      id: 8,
      countryId: 192,
      name: 'Cojedes',
    },
    {
      id: 9,
      countryId: 192,
      name: 'Delta Amacuro',
    },
    {
      id: 10,
      countryId: 192,
      name: 'Distrito Capital',
    },
    {
      id: 11,
      countryId: 192,
      name: 'Falcón',
    },
    {
      id: 12,
      countryId: 192,
      name: 'Guárico',
    },
    {
      id: 13,
      countryId: 192,
      name: 'Lara',
    },
    {
      id: 14,
      countryId: 192,
      name: 'Mérida',
    },
    {
      id: 15,
      countryId: 192,
      name: 'Miranda',
    },
    {
      id: 16,
      countryId: 192,
      name: 'Monagas',
    },
    {
      id: 17,
      countryId: 192,
      name: 'Nueva Esparta',
    },
    {
      id: 18,
      countryId: 192,
      name: 'Portuguesa',
    },
    {
      id: 19,
      countryId: 192,
      name: 'Sucre',
    },
    {
      id: 20,
      countryId: 192,
      name: 'Táchira',
    },
    {
      id: 21,
      countryId: 192,
      name: 'Trujillo',
    },
    {
      id: 22,
      countryId: 192,
      name: 'Vargas',
    },
    {
      id: 23,
      countryId: 192,
      name: 'Yaracuy',
    },
    {
      id: 24,
      countryId: 192,
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
      name: 'Cotizada',
      description: '',
    },
    {
      id: 2,
      name: 'Expedida',
      description: '',
    },
    {
      id: 3,
      name: 'Pagada',
      description: '',
    },
  ];
  return PolicyStatuses;
}

export function createRandomRelationPolicyStatus() {
  const PolicyStatuses = [
    {
      id: 1,
      name: 'Tomador',
    },
    {
      id: 2,
      name: 'Beneficiario',
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
      name: 'RIF',
    },
  ];
  return documentTypes;
}

export function createRandomPeriodicitys() {
  const randomPeriodicitys = [
    {
      id: 1,
      name: 'Mensual',
    },
    {
      id: 2,
      name: 'Trimestral',
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

export async function createRandomUsers() {
    const hash = await argon.hash('123456');
    const user = [
    {
        id: 1,
        username: "Enyel Tovar",
        email: "enyeltov@admin.com",
        hashedPassword: hash,
        userRole: 'admin',
    },
    {
        id: 2,
        username: "Enyel Tovar",
        email: "enyeltov@digi.com",
        hashedPassword: hash,
        userRole: 'digitalizer',
    },
    ];
    return user;
  }

export function createRandomAddresses(min, max) {
  const address: CreateAddressDto = {
    street: faker.address.streetAddress(),
    cityId: randomIntFromInterval(min, max),
  };
  return address;
}

export function wwwCreateRandomCountryStates(min, max) {
  const countryState: CreateCountryStateDto = {
    name: faker.address.state(),
    countryId: randomIntFromInterval(min, max),
  };
  return countryState;
}

export function wwwCreateRandomCountries() {
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
    document: +faker.random.numeric(7),
    documentTypeId: randomIntFromInterval(1, 2),
    birthDate: faker.date.past(),
    email: faker.internet.email(),
    personId: randomIntFromInterval(min, max),
    civilPolicyStatus: 'single',
    company: faker.company.companyName(),
    ocupation: faker.name.jobTitle(),
    phone: faker.phone.phoneNumber('0414-#######'),
    gender: 'Masculino',
  };
  return client;
}

export function createRandomAgents(min: number, max: number) {
  const agent = {
    name: faker.name.firstName(),
    lastName: faker.name.lastName(),
    document: +faker.random.numeric(7),
    documentTypeId: randomIntFromInterval(1, 2),
    birthDate: faker.date.past(),
    email: faker.internet.email(),
    personId: randomIntFromInterval(min, max),
    phone: faker.phone.phoneNumber('0414-#######'),
    gender: 'Masculino',
    dummy: 'dummy'
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
    name: faker.commerce.department(),
    branchTypeId: randomIntFromInterval(1, 4),
  };

  return subBranchs;
}

export function createRandomPolicyDetails(min, max) {
  const policyDetails: CreateOrderDetailDto = {
    policyId: randomIntFromInterval(min, max),
    ClientHasTomadorId: randomIntFromInterval(min, max),
    periodicityId: randomIntFromInterval(min, max),
    primeValue: +faker.random.numeric(),
    AnnexValue: +faker.random.numeric(),
    ValorFinalizacion: +faker.random.numeric(),
    Total: +faker.random.numeric(),
  };
  return policyDetails;
// }

// export function createRandomAgencies() {
//   const agency: CreateAgencyDto = {
//     document: +faker.random.numeric(7),
//     name: faker.company.companyName(),
//     phone: faker.phone.phoneNumber('+58 414 #######'),
//     email: faker.internet.email(),
//   };
//   return agency;
}
