/*
  Warnings:

  - A unique constraint covering the columns `[personId]` on the table `Agents` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `BranchTypes` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[personId]` on the table `Clients` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[documentTypeId]` on the table `Persons` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Agents" ADD COLUMN     "dummy" VARCHAR(255);

-- CreateIndex
CREATE UNIQUE INDEX "Agents_personId_key" ON "Agents"("personId");

-- CreateIndex
CREATE UNIQUE INDEX "BranchTypes_name_key" ON "BranchTypes"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Clients_personId_key" ON "Clients"("personId");

-- CreateIndex
CREATE UNIQUE INDEX "Persons_documentTypeId_key" ON "Persons"("documentTypeId");
