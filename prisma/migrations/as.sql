Enum "genders" {
  "male"
  "female"
  "others"
}

Enum "userroles" {
  "admin"
  "digitalizer"
  "dummy"
}

Enum "entitiablenum" {
  "Companies"
  "Clients"
}

Table "Addresses" {
  "id" int [pk, not null, increment]
  "cityId" INTEGER [not null]
  "street" VARCHAR(255)
  "residence" VARCHAR(255)
  "GPS" VARCHAR(255)
  "createdAt" timestamp(6) [default: `CURRENT_TIMESTAMP`]
  "createdBy" VARCHAR(255)
  "updatedAt" timestamp(6)
  "updatedBy" VARCHAR(255)
  "softDeletedAt" timestamp(6)
  "softDeletedBy" VARCHAR(255)
}

Table "Agents" {
  "id" int [pk, not null, increment]
  "personId" INTEGER [not null]
  "AgenciesId" INTEGER
  "createdAt" timestamp(6) [default: `CURRENT_TIMESTAMP`]
  "createdBy" VARCHAR(255)
  "updatedAt" timestamp(6)
  "updatedBy" VARCHAR(255)
  "softDeletedAt" timestamp(6)
  "softDeletedBy" VARCHAR(255)
}

Table "ClientHasAgents" {
  "id" int [pk, not null, increment]
  "clientId" INTEGER
  "agentId" INTEGER
  "createdAt" timestamp(6) [default: `CURRENT_TIMESTAMP`]
  "createdBy" VARCHAR(255)
  "updatedAt" timestamp(6)
  "updatedBy" VARCHAR(255)
  "softDeletedAt" timestamp(6)
  "softDeletedBy" VARCHAR(255)
}

Table "ClientHasTomadors" {
  "id" int [pk, not null, increment]
  "clientPolizaId" INTEGER
  "createdAt" timestamp(6) [default: `CURRENT_TIMESTAMP`]
  "createdBy" VARCHAR(255)
  "updatedAt" timestamp(6)
  "updatedBy" VARCHAR(255)
  "softDeletedAt" timestamp(6)
  "softDeletedBy" VARCHAR(255)
}

Table "Clients" {
  "id" int [pk, not null, increment]
  "personId" INTEGER [not null]
  "civilPolicyStatus" VARCHAR(255)
  "company" VARCHAR(255)
  "ocupation" VARCHAR(255)
  "createdAt" timestamp(6) [default: `CURRENT_TIMESTAMP`]
  "createdBy" VARCHAR(255)
  "updatedAt" timestamp(6)
  "updatedBy" VARCHAR(255)
  "softDeletedAt" timestamp(6)
  "softDeletedBy" VARCHAR(255)
}

Table "Configs" {
  "id" int [pk, not null, increment]
  "key" VARCHAR(255) [not null]
  "value" VARCHAR(255) [not null]
  "createdAt" timestamp(6) [default: `CURRENT_TIMESTAMP`]
  "createdBy" VARCHAR(255)
  "updatedAt" timestamp(6)
  "updatedBy" VARCHAR(255)
  "softDeletedAt" timestamp(6)
  "softDeletedBy" VARCHAR(255)
}

Table "InsuranceCarriers" {
  "id" int [pk, not null, increment]
  "document" int
  "name" VARCHAR(255)
  "phone" VARCHAR(255)
  "email" VARCHAR(255)
  "account" VARCHAR(255)
  "paymentLink" VARCHAR(255)
  "createdAt" timestamp(6) [default: `CURRENT_TIMESTAMP`]
  "createdBy" VARCHAR(255)
  "updatedAt" timestamp(6)
  "updatedBy" VARCHAR(255)
  "softDeletedAt" timestamp(6)
  "softDeletedBy" VARCHAR(255)
}

Table "OrderDetails" {
  "id" int [pk, not null, increment]
  "ClientHasTomadorId" INTEGER [not null]
  "periodicityId" INTEGER [not null]
  "primeValue" float
  "taxes" float
  "AnnexValue" float
  "comission" float
  "comissionPolicyStatus" BOOLEAN
  "ValorFinalizacion" float
  "Total" float
  "createdAt" timestamp(6) [default: `CURRENT_TIMESTAMP`]
  "createdBy" VARCHAR(255)
  "updatedAt" timestamp(6)
  "updatedBy" VARCHAR(255)
  "softDeletedAt" timestamp(6)
  "softDeletedBy" VARCHAR(255)
}

Table "Patrimonials" {
  "id" int [pk, not null, increment]
  "policyId" INTEGER [not null]
  "type" VARCHAR(255) [not null]
  "totalValue" float
  "machineryValue" float
  "furnitureValue" float
  "createdAt" timestamp(6) [default: `CURRENT_TIMESTAMP`]
  "createdBy" VARCHAR(255)
  "updatedAt" timestamp(6)
  "updatedBy" VARCHAR(255)
  "softDeletedAt" timestamp(6)
  "softDeletedBy" VARCHAR(255)
}

Table "Payments" {
  "id" int [pk, not null, increment]
  "orderDetailsId" INTEGER [not null]
  "receiptNumber" float
  "paymentValue" float
  "paymentDate" DATE
  "comissionDate" DATE
  "createdAt" timestamp(6) [default: `CURRENT_TIMESTAMP`]
  "createdBy" VARCHAR(255)
  "updatedAt" timestamp(6)
  "updatedBy" VARCHAR(255)
  "softDeletedAt" timestamp(6)
  "softDeletedBy" VARCHAR(255)
}

Table "Periods" {
  "id" int [pk, not null, increment]
  "policyId" INTEGER
  "startDate" DATE [not null]
  "endDate" DATE [not null]
  "renewal" INTEGER
  "createdAt" timestamp(6) [default: `CURRENT_TIMESTAMP`]
  "createdBy" VARCHAR(255)
  "updatedAt" timestamp(6)
  "updatedBy" VARCHAR(255)
  "softDeletedAt" timestamp(6)
  "softDeletedBy" VARCHAR(255)
}

Table "Persons" {
  "id" int [pk, not null, increment]
  "documentTypeId" INTEGER 
  "document" int 
  "AddressId" INTEGER 
  "gender" genders
  "name" VARCHAR(255) [not null]
  "lastName" VARCHAR(255) [not null]
  "birthDate" DATE
  "phone" VARCHAR(255)
  "email" VARCHAR(255) [not null,unique]
  "createdAt" timestamp(6) [default: `CURRENT_TIMESTAMP`]
  "createdBy" VARCHAR(255)
  "updatedAt" timestamp(6)
  "updatedBy" VARCHAR(255)
  "softDeletedAt" timestamp(6)
  "softDeletedBy" VARCHAR(255)
}

Table "PolicyStatus" {
  "id" int [pk, not null, increment]
  "PolicystatusName" VARCHAR(255) [not null]
  "Description" VARCHAR(255)
  "createdAt" timestamp(6) [default: `CURRENT_TIMESTAMP`]
  "createdBy" VARCHAR(255)
  "updatedAt" timestamp(6)
  "updatedBy" VARCHAR(255)
  "softDeletedAt" timestamp(6)
  "softDeletedBy" VARCHAR(255)
}

Table "RelationPolicyStatus" {
  "id" int [pk, not null, increment]
  "relationName" VARCHAR(255) [not null]
  "createdAt" timestamp(6) [default: `CURRENT_TIMESTAMP`]
  "createdBy" VARCHAR(255)
  "updatedAt" timestamp(6)
  "updatedBy" VARCHAR(255)
  "softDeletedAt" timestamp(6)
  "softDeletedBy" VARCHAR(255)
}

Table "Travels" {
  "id" int [pk, not null, increment]
  "startCountry" INTEGER [not null]
  "endCountry" INTEGER [not null]
  "policyId" INTEGER [not null]
  "startDate" DATE [not null]
  "endDate" DATE [not null]
  "createdAt" timestamp(6) [default: `CURRENT_TIMESTAMP`]
  "createdBy" VARCHAR(255)
  "updatedAt" timestamp(6)
  "updatedBy" VARCHAR(255)
  "softDeletedAt" timestamp(6)
  "softDeletedBy" VARCHAR(255)
}

Table "Users" {
  "id" int [pk, not null, increment]
  "userRole" userroles
  "hashedPassword" TEXT [not null]
  "createdAt" timestamp(6) [default: `CURRENT_TIMESTAMP`]
  "createdBy" VARCHAR(255)
  "updatedAt" timestamp(6)
  "updatedBy" VARCHAR(255)
  "softDeletedAt" timestamp(6)
  "softDeletedBy" VARCHAR(255)
}

Table "Vehicles" {
  "id" int [pk, not null, increment]
  "policyId" INTEGER [not null]
  "brand" VARCHAR(255) [not null]
  "class" VARCHAR(255)
  "model" VARCHAR(255)
  "vehicleType" VARCHAR(255)
  "serviceType" VARCHAR(255)
  "gasConverted" VARCHAR(255)
  "vehicleAge" INTEGER
  "createdAt" timestamp(6) [default: `CURRENT_TIMESTAMP`]
  "createdBy" VARCHAR(255)
  "updatedAt" timestamp(6)
  "updatedBy" VARCHAR(255)
  "softDeletedAt" timestamp(6)
  "softDeletedBy" VARCHAR(255)
}

Table "BranchTypes" {
  "id" int [pk, not null, increment]
  "name" VARCHAR(255) [not null]
  "createdAt" timestamp(6) [default: `CURRENT_TIMESTAMP`]
  "createdBy" VARCHAR(255)
  "updatedAt" timestamp(6)
  "updatedBy" VARCHAR(255)
  "softDeletedAt" timestamp(6)
  "softDeletedBy" VARCHAR(255)
}

Table "Continents" {
  "id" int [pk, not null, increment]
  "name" VARCHAR(255) [not null]
  "createdAt" timestamp(6) [default: `CURRENT_TIMESTAMP`]
  "createdBy" VARCHAR(255)
  "updatedAt" timestamp(6)
  "updatedBy" VARCHAR(255)
  "softDeletedAt" timestamp(6)
  "softDeletedBy" VARCHAR(255)
}

Table "CountryStates" {
  "id" int [pk, not null, increment]
  "name" VARCHAR(255) [not null]
  "contryId" INTEGER
  "createdAt" timestamp(6) [default: `CURRENT_TIMESTAMP`]
  "createdBy" VARCHAR(255)
  "updatedAt" timestamp(6)
  "updatedBy" VARCHAR(255)
  "softDeletedAt" timestamp(6)
  "softDeletedBy" VARCHAR(255)
}

Table "SubBranchs" {
  "id" int [pk, not null, increment]
  "name" VARCHAR(255) [not null]
  "branchTypeId" INTEGER
  "createdAt" timestamp(6) [default: `CURRENT_TIMESTAMP`]
  "createdBy" VARCHAR(255)
  "updatedAt" timestamp(6)
  "updatedBy" VARCHAR(255)
  "softDeletedAt" timestamp(6)
  "softDeletedBy" VARCHAR(255)
}

Table "Taxes" {
  "id" int [pk, not null, increment]
  "OrderDetailsId" INTEGER [not null]
  "metakey" VARCHAR(255) [not null]
  "metavalue" VARCHAR(255) [not null]
  "createdAt" timestamp(6) [default: `CURRENT_TIMESTAMP`]
  "createdBy" VARCHAR(255)
  "updatedAt" timestamp(6)
  "updatedBy" VARCHAR(255)
  "softDeletedAt" timestamp(6)
  "softDeletedBy" VARCHAR(255)
}

Table "Agencies" {
  "id" int [pk, not null, increment]
  "document" int
  "name" VARCHAR(255)
  "phone" VARCHAR(255)
  "email" VARCHAR(255)
  "createdAt" timestamp(6) [default: `CURRENT_TIMESTAMP`]
  "createdBy" VARCHAR(255)
  "updatedAt" timestamp(6)
  "updatedBy" VARCHAR(255)
  "softDeletedBy" VARCHAR(255)
  "softDeletedAt" timestamp(6)
}

Table "Cities" {
  "id" int [pk, not null, increment]
  "name" VARCHAR(255) [not null]
  "countryStateId" INTEGER [not null]
  "createdAt" timestamp(6) [default: `CURRENT_TIMESTAMP`]
  "createdBy" VARCHAR(255)
  "updatedAt" timestamp(6)
  "updatedBy" VARCHAR(255)
  "softDeletedAt" timestamp(6)
  "softDeletedBy" VARCHAR(255)
}

Table "Companies" {
  "id" int [pk, not null, increment]
  "document" INTEGER [not null]
  "socialReason" VARCHAR(255)
  "economicActivity" VARCHAR(255)
  "webPage" VARCHAR(255)
  "createdAt" timestamp(6) [default: `CURRENT_TIMESTAMP`]
  "createdBy" VARCHAR(255)
  "updatedAt" timestamp(6)
  "updatedBy" VARCHAR(255)
  "softDeletedAt" timestamp(6)
  "softDeletedBy" VARCHAR(255)
}

Table "Countries" {
  "id" int [pk, not null, increment]
  "continentId" INTEGER [not null]
  "countryName" VARCHAR(255) [not null]
  "createdAt" timestamp(6) [default: `CURRENT_TIMESTAMP`]
  "createdBy" VARCHAR(255)
  "updatedAt" timestamp(6)
  "updatedBy" VARCHAR(255)
  "softDeletedAt" timestamp(6)
  "softDeletedBy" VARCHAR(255)
}

Table "DocumentTypes" {
  "id" int [pk, not null, increment]
  "name" VARCHAR(255) [not null]
  "createdAt" timestamp(6) [default: `CURRENT_TIMESTAMP`]
  "createdBy" VARCHAR(255)
  "updatedAt" timestamp(6)
  "updatedBy" VARCHAR(255)
  "softDeletedAt" timestamp(6)
  "softDeletedBy" VARCHAR(255)
}

Table "Periodicities" {
  "id" int [pk, not null, increment]
  "name" VARCHAR(255) [not null]
  "createdAt" timestamp(6) [default: `CURRENT_TIMESTAMP`]
  "createdBy" VARCHAR(255)
  "updatedAt" timestamp(6)
  "updatedBy" VARCHAR(255)
  "softDeletedAt" timestamp(6)
  "softDeletedBy" VARCHAR(255)
}

Table "Policies" {
  "id" int [pk, not null, increment]
  "InsuranceCarrierId" INTEGER [not null]
  "policyNum" float
  "policyStatusId" INTEGER [not null]
  "Risk" VARCHAR(255) [not null]
  "branchTypeId" INTEGER [not null]
  "subBranchId" INTEGER [not null]
  "insuredValue" float
  "Renovable" BOOLEAN [not null]
  "createdAt" timestamp(6) [default: `CURRENT_TIMESTAMP`]
  "createdBy" VARCHAR(255)
  "updatedAt" timestamp(6)
  "updatedBy" VARCHAR(255)
  "softDeletedAt" timestamp(6)
  "softDeletedBy" VARCHAR(255)
}

Table "AgentContracts" {
  "id" int [pk, not null, increment]
  "policyId" INTEGER
  "agentId" INTEGER
  "createdAt" timestamp(6) [default: `CURRENT_TIMESTAMP`]
  "createdBy" VARCHAR(255)
  "updatedAt" timestamp(6)
  "updatedBy" VARCHAR(255)
  "softDeletedAt" timestamp(6)
  "softDeletedBy" VARCHAR(255)
}

Table "EntitiesHasPolizas" {
  "id" int [pk, not null, increment]
  "policyId" INTEGER
  "entitiableTypes" entitiablenum [not null]
  "entitiableId" INTEGER
  "relationId" INTEGER
  "createdAt" timestamp(6) [default: `CURRENT_TIMESTAMP`]
  "createdBy" VARCHAR(255)
  "updatedAt" timestamp(6)
  "updatedBy" VARCHAR(255)
  "softDeletedAt" timestamp(6)
  "softDeletedBy" VARCHAR(255)
}

Table "Notifications" {
  "id" int [pk, not null, increment]
  "type" VARCHAR(255)
  "clientId" INTEGER
  "notifiableType" VARCHAR(255)
  "notifiableId" INTEGER
  "data" TEXT
  "readAt" timestamp(6)
  "createdAt" timestamp(6) [default: `CURRENT_TIMESTAMP`]
  "createdBy" VARCHAR(255)
  "updatedAt" timestamp(6)
  "updatedBy" VARCHAR(255)
  "softDeletedAt" timestamp(6)
  "softDeletedBy" VARCHAR(255)
}

Ref:"Cities"."id" < "Addresses"."cityId" [update: no action, delete: no action]

Ref:"Persons"."id" - "Agents"."personId" [update: no action, delete: cascade]

Ref:"Agencies"."id" < "Agents"."AgenciesId" [update: no action, delete: no action]

Ref:"Agents"."id" < "ClientHasAgents"."agentId" [update: no action, delete: no action]

Ref:"Clients"."id" < "ClientHasAgents"."clientId" [update: no action, delete: no action]

Ref:"EntitiesHasPolizas"."id" < "ClientHasTomadors"."clientPolizaId" [update: no action, delete: cascade]

Ref:"Persons"."id" - "Clients"."personId" [update: no action, delete: cascade]

Ref:"ClientHasTomadors"."id" < "OrderDetails"."ClientHasTomadorId" [update: no action, delete: cascade]

Ref:"Periodicities"."id" < "OrderDetails"."periodicityId" [update: no action, delete: no action]

Ref:"Policies"."id" < "Patrimonials"."policyId" [update: no action, delete: no action]

Ref:"OrderDetails"."id" < "Payments"."orderDetailsId" [update: no action, delete: no action]

Ref:"Policies"."id" < "Periods"."policyId" [update: no action, delete: no action]

Ref:"Addresses"."id" < "Persons"."AddressId" [update: no action, delete: no action]

Ref:"Countries"."id" < "Travels"."endCountry" [update: no action, delete: no action]

Ref:"Countries"."id" < "Travels"."startCountry" [update: no action, delete: no action]

Ref:"Policies"."id" < "Travels"."policyId" [update: no action, delete: no action]

Ref:"Policies"."id" < "Vehicles"."policyId" [update: no action, delete: no action]

Ref:"Countries"."id" < "CountryStates"."contryId" [update: no action, delete: no action]

Ref:"BranchTypes"."id" < "SubBranchs"."branchTypeId" [update: no action, delete: no action]

Ref:"OrderDetails"."id" < "Taxes"."OrderDetailsId" [update: no action, delete: no action]

Ref:"CountryStates"."id" < "Cities"."countryStateId" [update: no action, delete: no action]

Ref:"Continents"."id" < "Countries"."continentId" [update: no action, delete: no action]

Ref:"DocumentTypes"."id" < "Persons"."documentTypeId" [update: no action, delete: no action]

Ref:"InsuranceCarriers"."id" < "Policies"."InsuranceCarrierId" [update: no action, delete: no action]

Ref:"PolicyStatus"."id" < "Policies"."policyStatusId" [update: no action, delete: no action]

Ref:"BranchTypes"."id" < "Policies"."branchTypeId" [update: no action, delete: no action]

Ref:"SubBranchs"."id" < "Policies"."subBranchId" [update: no action, delete: no action]

Ref:"Agents"."id" < "AgentContracts"."agentId" [update: no action, delete: no action]

Ref:"Policies"."id" < "AgentContracts"."policyId" [update: no action, delete: no action]

Ref:"RelationPolicyStatus"."id" < "EntitiesHasPolizas"."relationId" [update: no action, delete: no action]

Ref:"Policies"."id" < "EntitiesHasPolizas"."policyId" [update: no action, delete: no action]

Ref:"Clients"."id" < "Notifications"."clientId" [update: no action, delete: no action]


Ref: "Persons"."id" - "Users"."id"