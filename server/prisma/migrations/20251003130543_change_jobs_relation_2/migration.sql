/*
  Warnings:

  - You are about to drop the `_CategoryToJobs` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `jobCategoryId` to the `Jobs` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "public"."_CategoryToJobs" DROP CONSTRAINT "_CategoryToJobs_A_fkey";

-- DropForeignKey
ALTER TABLE "public"."_CategoryToJobs" DROP CONSTRAINT "_CategoryToJobs_B_fkey";

-- AlterTable
ALTER TABLE "Jobs" ADD COLUMN     "jobCategoryId" INTEGER NOT NULL;

-- DropTable
DROP TABLE "public"."_CategoryToJobs";

-- AddForeignKey
ALTER TABLE "Jobs" ADD CONSTRAINT "Jobs_jobCategoryId_fkey" FOREIGN KEY ("jobCategoryId") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
