/*
  Warnings:

  - The `responsibilites` column on the `Jobs` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `skills` column on the `Jobs` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Jobs" DROP COLUMN "responsibilites",
ADD COLUMN     "responsibilites" TEXT[],
DROP COLUMN "skills",
ADD COLUMN     "skills" TEXT[];
