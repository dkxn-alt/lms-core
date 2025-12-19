/*
  Warnings:

  - Made the column `member_id` on table `loans` required. This step will fail if there are existing NULL values in that column.
  - Made the column `book_id` on table `loans` required. This step will fail if there are existing NULL values in that column.
  - Made the column `borrowed_at` on table `loans` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "loans" ALTER COLUMN "member_id" SET NOT NULL,
ALTER COLUMN "book_id" SET NOT NULL,
ALTER COLUMN "borrowed_at" SET NOT NULL;
