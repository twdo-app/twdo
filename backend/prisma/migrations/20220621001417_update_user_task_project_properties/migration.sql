-- AlterTable
ALTER TABLE "Project" ADD COLUMN     "emoji" TEXT,
ADD COLUMN     "index" INTEGER;

-- AlterTable
ALTER TABLE "Task" ADD COLUMN     "inboxIndex" INTEGER;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "wasCreatedWithOAuth" BOOLEAN NOT NULL DEFAULT false;
