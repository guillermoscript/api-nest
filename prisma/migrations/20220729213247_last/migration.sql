/*
  Warnings:

  - You are about to drop the column `GPS` on the `Addresses` table. All the data in the column will be lost.
  - You are about to drop the column `residence` on the `Addresses` table. All the data in the column will be lost.
  - You are about to drop the column `AgenciesId` on the `Agents` table. All the data in the column will be lost.
  - You are about to drop the column `comissionDate` on the `Payments` table. All the data in the column will be lost.
  - You are about to drop the column `ClientHasTomadorId` on the `PolicyDetails` table. All the data in the column will be lost.
  - You are about to drop the column `comission` on the `PolicyDetails` table. All the data in the column will be lost.
  - You are about to drop the column `comissionPolicyStatus` on the `PolicyDetails` table. All the data in the column will be lost.
  - You are about to drop the column `currencyId` on the `PolicyDetails` table. All the data in the column will be lost.
  - You are about to drop the column `gasConverted` on the `Vehicles` table. All the data in the column will be lost.
  - You are about to drop the column `serviceType` on the `Vehicles` table. All the data in the column will be lost.
  - You are about to drop the `Agencies` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ClientHasTaker` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Currencies` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[document]` on the table `InsuranceCarriers` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[email]` on the table `Users` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `policyId` to the `PolicyDetails` table without a default value. This is not possible if the table is not empty.
  - Added the required column `email` to the `Users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `username` to the `Users` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Agents" DROP CONSTRAINT "Agents_AgenciesId_fkey";

-- DropForeignKey
ALTER TABLE "ClientHasTaker" DROP CONSTRAINT "ClientHasTaker_clientPolizaId_fkey";

-- DropForeignKey
ALTER TABLE "PolicyDetails" DROP CONSTRAINT "PolicyDetails_ClientHasTomadorId_fkey";

-- DropForeignKey
ALTER TABLE "PolicyDetails" DROP CONSTRAINT "PolicyDetails_currencyId_fkey";

-- DropForeignKey
ALTER TABLE "Users" DROP CONSTRAINT "Users_id_fkey";

-- AlterTable
ALTER TABLE "Addresses" DROP COLUMN "GPS",
DROP COLUMN "residence";

-- AlterTable
ALTER TABLE "Agents" DROP COLUMN "AgenciesId";

-- AlterTable
ALTER TABLE "Payments" DROP COLUMN "comissionDate";

-- AlterTable
ALTER TABLE "PolicyDetails" DROP COLUMN "ClientHasTomadorId",
DROP COLUMN "comission",
DROP COLUMN "comissionPolicyStatus",
DROP COLUMN "currencyId",
ADD COLUMN     "policyId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Users" ADD COLUMN     "email" VARCHAR(255) NOT NULL,
ADD COLUMN     "username" VARCHAR(255) NOT NULL;

-- AlterTable
ALTER TABLE "Vehicles" DROP COLUMN "gasConverted",
DROP COLUMN "serviceType";

-- DropTable
DROP TABLE "Agencies";

-- DropTable
DROP TABLE "ClientHasTaker";

-- DropTable
DROP TABLE "Currencies";

-- CreateIndex
CREATE UNIQUE INDEX "InsuranceCarriers_document_key" ON "InsuranceCarriers"("document");

-- CreateIndex
CREATE UNIQUE INDEX "Users_email_key" ON "Users"("email");

-- AddForeignKey
ALTER TABLE "PolicyDetails" ADD CONSTRAINT "PolicyDetails_policyId_fkey" FOREIGN KEY ("policyId") REFERENCES "Policies"("id") ON DELETE CASCADE ON UPDATE CASCADE;
