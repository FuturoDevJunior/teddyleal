/*
  Warnings:

  - Added the required column `tenantId` to the `ShortUrl` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tenantId` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ShortUrl" ADD COLUMN "tenantId" TEXT NOT NULL DEFAULT 'default-tenant';
ALTER TABLE "User" ADD COLUMN "tenantId" TEXT NOT NULL DEFAULT 'default-tenant';

-- Atualizar registros existentes
UPDATE "ShortUrl" SET "tenantId" = 'default-tenant' WHERE "tenantId" IS NULL;
UPDATE "User" SET "tenantId" = 'default-tenant' WHERE "tenantId" IS NULL;

-- Remover default
ALTER TABLE "ShortUrl" ALTER COLUMN "tenantId" DROP DEFAULT;
ALTER TABLE "User" ALTER COLUMN "tenantId" DROP DEFAULT;

-- CreateIndex
CREATE INDEX "ShortUrl_tenantId_idx" ON "ShortUrl"("tenantId");
CREATE INDEX "User_tenantId_idx" ON "User"("tenantId");
