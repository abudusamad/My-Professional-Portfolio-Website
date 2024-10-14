/*
  Warnings:

  - You are about to drop the column `techId` on the `Project` table. All the data in the column will be lost.
  - The primary key for the `ProjectOnTechStack` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `ProjectOnTechStack` table. All the data in the column will be lost.
  - Made the column `title` on table `Project` required. This step will fail if there are existing NULL values in that column.
  - Made the column `description` on table `Project` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `updatedAt` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "ProjectOnTechStack_techId_projectId_key";

-- AlterTable
ALTER TABLE "Project" DROP COLUMN "techId",
ALTER COLUMN "title" SET NOT NULL,
ALTER COLUMN "description" SET NOT NULL,
ALTER COLUMN "link" DROP NOT NULL,
ALTER COLUMN "image_url" DROP NOT NULL,
ALTER COLUMN "isPublished" SET DEFAULT false;

-- AlterTable
ALTER TABLE "ProjectOnTechStack" DROP CONSTRAINT "ProjectOnTechStack_pkey",
DROP COLUMN "id",
ADD CONSTRAINT "ProjectOnTechStack_pkey" PRIMARY KEY ("projectId", "techId");

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;
