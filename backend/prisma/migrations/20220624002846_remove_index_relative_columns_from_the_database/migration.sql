/*
  Warnings:

  - You are about to drop the column `index` on the `Project` table. All the data in the column will be lost.
  - You are about to drop the column `inboxIndex` on the `Task` table. All the data in the column will be lost.
  - You are about to drop the column `projectIndex` on the `Task` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Project" DROP COLUMN "index";

-- AlterTable
ALTER TABLE "Task" DROP COLUMN "inboxIndex",
DROP COLUMN "projectIndex";
