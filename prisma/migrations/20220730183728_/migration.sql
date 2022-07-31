/*
  Warnings:

  - A unique constraint covering the columns `[document]` on the table `Persons` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "Persons_documentTypeId_key";

-- CreateIndex
CREATE UNIQUE INDEX "Persons_document_key" ON "Persons"("document");
