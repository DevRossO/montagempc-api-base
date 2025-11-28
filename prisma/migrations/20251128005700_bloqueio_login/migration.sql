/*
  Warnings:

  - Made the column `senha` on table `usuario` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `usuario` ADD COLUMN `bloqueado` BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN `bloqueadoEm` DATETIME(3) NULL,
    ADD COLUMN `tentativasLogin` INTEGER NOT NULL DEFAULT 0,
    MODIFY `senha` VARCHAR(191) NOT NULL;
