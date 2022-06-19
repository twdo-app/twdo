/*
  Warnings:

  - You are about to drop the column `date` on the `Task` table. All the data in the column will be lost.
  - You are about to drop the column `dateIndex` on the `Task` table. All the data in the column will be lost.
  - You are about to drop the column `dueDate` on the `Task` table. All the data in the column will be lost.
  - Added the required column `isCompleted` to the `Task` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Task" DROP COLUMN "date",
DROP COLUMN "dateIndex",
DROP COLUMN "dueDate",
ADD COLUMN     "isCompleted" BOOLEAN NOT NULL;
