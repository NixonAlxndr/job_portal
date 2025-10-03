/*
  Warnings:

  - You are about to drop the column `jobTagsId` on the `Jobs` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."Jobs" DROP CONSTRAINT "Jobs_jobTagsId_fkey";

-- AlterTable
ALTER TABLE "Jobs" DROP COLUMN "jobTagsId",
ALTER COLUMN "jobPosted" SET DEFAULT CURRENT_TIMESTAMP;

-- CreateTable
CREATE TABLE "_JobsToTag" (
    "A" TEXT NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_JobsToTag_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_JobsToTag_B_index" ON "_JobsToTag"("B");

-- AddForeignKey
ALTER TABLE "_JobsToTag" ADD CONSTRAINT "_JobsToTag_A_fkey" FOREIGN KEY ("A") REFERENCES "Jobs"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_JobsToTag" ADD CONSTRAINT "_JobsToTag_B_fkey" FOREIGN KEY ("B") REFERENCES "Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;
