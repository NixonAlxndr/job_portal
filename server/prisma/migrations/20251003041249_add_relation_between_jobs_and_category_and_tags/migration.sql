/*
  Warnings:

  - A unique constraint covering the columns `[jobCategoryId]` on the table `Jobs` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `jobCategoryId` to the `Jobs` table without a default value. This is not possible if the table is not empty.
  - Added the required column `jobTagsId` to the `Jobs` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Jobs" ADD COLUMN     "jobCategoryId" INTEGER NOT NULL,
ADD COLUMN     "jobTagsId" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Jobs_jobCategoryId_key" ON "Jobs"("jobCategoryId");

-- AddForeignKey
ALTER TABLE "Jobs" ADD CONSTRAINT "Jobs_jobTagsId_fkey" FOREIGN KEY ("jobTagsId") REFERENCES "Tag"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Jobs" ADD CONSTRAINT "Jobs_jobCategoryId_fkey" FOREIGN KEY ("jobCategoryId") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
