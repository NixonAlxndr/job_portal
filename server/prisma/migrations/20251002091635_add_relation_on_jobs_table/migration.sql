/*
  Warnings:

  - Added the required column `jobPosted` to the `Jobs` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Jobs" ADD COLUMN     "jobPosted" TIMESTAMP(3) NOT NULL;
