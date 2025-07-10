-- CreateEnum
CREATE TYPE "StatutProduit" AS ENUM ('DISPONIBLE', 'EN_RUPTURE', 'ARCHIVE');

-- CreateEnum
CREATE TYPE "StatutCommande" AS ENUM ('EN_ATTENTE', 'CONFIRMEE', 'EN_PREPARATION', 'EXPEDIEE', 'LIVREE', 'ANNULEE');

-- CreateEnum
CREATE TYPE "StatutLivraison" AS ENUM ('EN_TRANSIT', 'LIVREE', 'EN_ATTENTE');

-- CreateEnum
CREATE TYPE "StatutAlerte" AS ENUM ('ACTIVE', 'RESOLUE');

-- CreateTable
CREATE TABLE "Produit" (
    "idProduit" TEXT NOT NULL,
    "nom" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "prix" DOUBLE PRECISION NOT NULL,
    "quantiteStock" INTEGER NOT NULL,
    "typeProduit" TEXT NOT NULL,
    "imageURL" TEXT NOT NULL,
    "dateAjout" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "statutProduit" "StatutProduit" NOT NULL,
    "categorieId" TEXT,

    CONSTRAINT "Produit_pkey" PRIMARY KEY ("idProduit")
);

-- CreateTable
CREATE TABLE "Categorie" (
    "idCategorie" TEXT NOT NULL,
    "nomCategorie" TEXT NOT NULL,
    "descriptionCategorie" TEXT NOT NULL,
    "typeCategorie" TEXT NOT NULL,
    "imageCategorie" TEXT NOT NULL,

    CONSTRAINT "Categorie_pkey" PRIMARY KEY ("idCategorie")
);

-- CreateTable
CREATE TABLE "Commande" (
    "idCommande" TEXT NOT NULL,
    "numeroCommande" TEXT NOT NULL,
    "dateCommande" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "statutCommande" "StatutCommande" NOT NULL,
    "totalCommande" DOUBLE PRECISION NOT NULL,
    "taxesAppliquees" DOUBLE PRECISION NOT NULL,
    "adresseLivraison" TEXT NOT NULL,
    "modePaiement" TEXT NOT NULL,
    "datePaiement" TIMESTAMP(3),
    "utilisateurId" TEXT NOT NULL,

    CONSTRAINT "Commande_pkey" PRIMARY KEY ("idCommande")
);

-- CreateTable
CREATE TABLE "LigneCommande" (
    "idLigneCommande" TEXT NOT NULL,
    "quantite" INTEGER NOT NULL,
    "prixUnitaire" DOUBLE PRECISION NOT NULL,
    "commandeId" TEXT NOT NULL,
    "produitId" TEXT NOT NULL,

    CONSTRAINT "LigneCommande_pkey" PRIMARY KEY ("idLigneCommande")
);

-- CreateTable
CREATE TABLE "Livraison" (
    "idLivraison" TEXT NOT NULL,
    "dateExpedition" TIMESTAMP(3) NOT NULL,
    "dateLivraisonPrevue" TIMESTAMP(3) NOT NULL,
    "dateLivraisonEffective" TIMESTAMP(3),
    "statutLivraison" "StatutLivraison" NOT NULL,
    "notesLivreur" TEXT,
    "signatureClient" TEXT,
    "commandeId" TEXT NOT NULL,
    "livreurId" TEXT NOT NULL,

    CONSTRAINT "Livraison_pkey" PRIMARY KEY ("idLivraison")
);

-- CreateTable
CREATE TABLE "Rapport" (
    "idRapport" TEXT NOT NULL,
    "typeRapport" TEXT NOT NULL,
    "dateGeneration" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "periode" TEXT NOT NULL,
    "contenuPDF" TEXT NOT NULL,

    CONSTRAINT "Rapport_pkey" PRIMARY KEY ("idRapport")
);

-- CreateTable
CREATE TABLE "AlerteStock" (
    "idAlerte" TEXT NOT NULL,
    "seuilMinimum" INTEGER NOT NULL,
    "dateAlerte" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "statutAlerte" "StatutAlerte" NOT NULL,
    "produitId" TEXT NOT NULL,

    CONSTRAINT "AlerteStock_pkey" PRIMARY KEY ("idAlerte")
);

-- CreateIndex
CREATE UNIQUE INDEX "Commande_numeroCommande_key" ON "Commande"("numeroCommande");

-- CreateIndex
CREATE UNIQUE INDEX "Livraison_commandeId_key" ON "Livraison"("commandeId");

-- AddForeignKey
ALTER TABLE "Produit" ADD CONSTRAINT "Produit_categorieId_fkey" FOREIGN KEY ("categorieId") REFERENCES "Categorie"("idCategorie") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Commande" ADD CONSTRAINT "Commande_utilisateurId_fkey" FOREIGN KEY ("utilisateurId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LigneCommande" ADD CONSTRAINT "LigneCommande_commandeId_fkey" FOREIGN KEY ("commandeId") REFERENCES "Commande"("idCommande") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LigneCommande" ADD CONSTRAINT "LigneCommande_produitId_fkey" FOREIGN KEY ("produitId") REFERENCES "Produit"("idProduit") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Livraison" ADD CONSTRAINT "Livraison_commandeId_fkey" FOREIGN KEY ("commandeId") REFERENCES "Commande"("idCommande") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Livraison" ADD CONSTRAINT "Livraison_livreurId_fkey" FOREIGN KEY ("livreurId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AlerteStock" ADD CONSTRAINT "AlerteStock_produitId_fkey" FOREIGN KEY ("produitId") REFERENCES "Produit"("idProduit") ON DELETE RESTRICT ON UPDATE CASCADE;
