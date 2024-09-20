/*
  Warnings:

  - You are about to drop the column `postion` on the `Job` table. All the data in the column will be lost.
  - You are about to drop the column `UserId` on the `Notification` table. All the data in the column will be lost.
  - The `proficency` column on the `Skill` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - A unique constraint covering the columns `[email]` on the table `Contact` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[startDate,institution]` on the table `Education` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[userId,createdAt]` on the table `Project` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `TechStack` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `position` to the `Job` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Notification` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Proficiency" AS ENUM ('BEGINNER', 'INTERMEDIATE', 'EXPERT');

-- DropForeignKey
ALTER TABLE "Notification" DROP CONSTRAINT "Notification_UserId_fkey";

-- DropForeignKey
ALTER TABLE "Project" DROP CONSTRAINT "Project_techId_fkey";

-- DropIndex
DROP INDEX "BlogPost_content_createdAt_key";

-- DropIndex
DROP INDEX "Education_startDate_endDate_key";

-- DropIndex
DROP INDEX "Project_createdAt_updateAt_key";

-- AlterTable
ALTER TABLE "Contact" ALTER COLUMN "phoneNumber" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "Education" ALTER COLUMN "qualifications" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "Job" DROP COLUMN "postion",
ADD COLUMN     "position" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Notification" DROP COLUMN "UserId",
ADD COLUMN     "userId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Skill" ALTER COLUMN "skill_name" SET DATA TYPE TEXT,
DROP COLUMN "proficency",
ADD COLUMN     "proficency" "Proficiency" NOT NULL DEFAULT 'BEGINNER';

-- DropEnum
DROP TYPE "Profiency";

-- CreateTable
CREATE TABLE "ProjectOnTechStack" (
    "id" TEXT NOT NULL,
    "techId" TEXT NOT NULL,
    "projectId" TEXT NOT NULL,

    CONSTRAINT "ProjectOnTechStack_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ProjectOnTechStack_techId_projectId_key" ON "ProjectOnTechStack"("techId", "projectId");

-- CreateIndex
CREATE UNIQUE INDEX "Contact_email_key" ON "Contact"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Education_startDate_institution_key" ON "Education"("startDate", "institution");

-- CreateIndex
CREATE INDEX "Notification_userId_isRead_idx" ON "Notification"("userId", "isRead");

-- CreateIndex
CREATE UNIQUE INDEX "Project_userId_createdAt_key" ON "Project"("userId", "createdAt");

-- CreateIndex
CREATE UNIQUE INDEX "TechStack_name_key" ON "TechStack"("name");

-- AddForeignKey
ALTER TABLE "ProjectOnTechStack" ADD CONSTRAINT "ProjectOnTechStack_techId_fkey" FOREIGN KEY ("techId") REFERENCES "TechStack"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProjectOnTechStack" ADD CONSTRAINT "ProjectOnTechStack_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Notification" ADD CONSTRAINT "Notification_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
