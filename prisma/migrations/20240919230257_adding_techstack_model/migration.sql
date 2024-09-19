/*
  Warnings:

  - You are about to drop the column `tech_stack` on the `Project` table. All the data in the column will be lost.
  - You are about to drop the column `project_id` on the `User` table. All the data in the column will be lost.
  - Added the required column `techId` to the `Project` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Project" DROP COLUMN "tech_stack",
ADD COLUMN     "techId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "project_id";

-- CreateTable
CREATE TABLE "TechStack" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "TechStack_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Project" ADD CONSTRAINT "Project_techId_fkey" FOREIGN KEY ("techId") REFERENCES "TechStack"("id") ON DELETE CASCADE ON UPDATE CASCADE;
