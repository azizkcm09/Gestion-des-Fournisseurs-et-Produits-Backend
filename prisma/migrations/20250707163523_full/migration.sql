/*
  Warnings:

  - Made the column `categorieId` on table `Produit` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Produit" DROP CONSTRAINT "Produit_categorieId_fkey";

-- AlterTable
ALTER TABLE "Produit" ALTER COLUMN "categorieId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "Produit" ADD CONSTRAINT "Produit_categorieId_fkey" FOREIGN KEY ("categorieId") REFERENCES "Categorie"("idCategorie") ON DELETE RESTRICT ON UPDATE CASCADE;
