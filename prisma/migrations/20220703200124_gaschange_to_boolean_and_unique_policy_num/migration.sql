/*
  Warnings:

  - The `gasConverted` column on the `Vehicles` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - A unique constraint covering the columns `[policyNum]` on the table `Policies` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Vehicles" DROP COLUMN "gasConverted",
ADD COLUMN     "gasConverted" BOOLEAN;

-- CreateIndex
CREATE UNIQUE INDEX "Policies_policyNum_key" ON "Policies"("policyNum");
