/*
  Warnings:

  - You are about to drop the column `utilisateurId` on the `Commande` table. All the data in the column will be lost.
  - Added the required column `adminId` to the `AlerteStock` table without a default value. This is not possible if the table is not empty.
  - Added the required column `clientId` to the `Commande` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fournisseurId` to the `Produit` table without a default value. This is not possible if the table is not empty.
  - Added the required column `adminId` to the `Rapport` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Commande" DROP CONSTRAINT "Commande_utilisateurId_fkey";

-- AlterTable
ALTER TABLE "AlerteStock" ADD COLUMN     "adminId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Commande" DROP COLUMN "utilisateurId",
ADD COLUMN     "clientId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Produit" ADD COLUMN     "fournisseurId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Rapport" ADD COLUMN     "adminId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Produit" ADD CONSTRAINT "Produit_fournisseurId_fkey" FOREIGN KEY ("fournisseurId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Commande" ADD CONSTRAINT "Commande_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Rapport" ADD CONSTRAINT "Rapport_adminId_fkey" FOREIGN KEY ("adminId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AlerteStock" ADD CONSTRAINT "AlerteStock_adminId_fkey" FOREIGN KEY ("adminId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
