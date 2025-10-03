/*
  Warnings:

  - You are about to drop the column `jobCategoryId` on the `Jobs` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."Jobs" DROP CONSTRAINT "Jobs_jobCategoryId_fkey";

-- DropIndex
DROP INDEX "public"."Jobs_jobCategoryId_key";

-- AlterTable
ALTER TABLE "Jobs" DROP COLUMN "jobCategoryId";

-- CreateTable
CREATE TABLE "_CategoryToJobs" (
    "A" INTEGER NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_CategoryToJobs_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_CategoryToJobs_B_index" ON "_CategoryToJobs"("B");

-- AddForeignKey
ALTER TABLE "_CategoryToJobs" ADD CONSTRAINT "_CategoryToJobs_A_fkey" FOREIGN KEY ("A") REFERENCES "Category"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CategoryToJobs" ADD CONSTRAINT "_CategoryToJobs_B_fkey" FOREIGN KEY ("B") REFERENCES "Jobs"("id") ON DELETE CASCADE ON UPDATE CASCADE;
