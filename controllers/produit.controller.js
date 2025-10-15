const { PrismaClient } = require("../generated/prisma");
const prisma = new PrismaClient();

// Create
const createProduit = async (req, res) => {
  try {
    const produit = await prisma.produit.create({
      data: {
        nom: req.body.nom,
        description: req.body.description,
        prix: parseFloat(req.body.prix), // 👈 convert string → float
        quantiteStock: parseInt(req.body.quantiteStock), // 👈 convert string → int
        typeProduit: req.body.typeProduit,
        statutProduit: req.body.statutProduit,
        categorieId: req.body.categorieId,
        fournisseurId: req.body.fournisseurId,
        imageURL: req.file
          ? `/uploads/${req.file.filename}`
          : req.body.imageURL,
        // 👆 if file uploaded, use path; otherwise fallback to provided URL
      },
    });

    res.status(201).json(produit);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

// Read all
const getAllProduits = async (req, res) => {
  try {
    const produits = await prisma.produit.findMany({
      include: {
        categorie: true,
        fournisseur: {
          select: {
            id: true,
            nom: true,
            prenom: true,
          },
        },
      },
    });
    res.json(produits);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Read one
const getProduitById = async (req, res) => {
  try {
    const produit = await prisma.produit.findUnique({
      where: { idProduit: req.params.id },
      include: {
        categorie: true,
        fournisseur: {
          select: {
            id: true,
            nom: true,
            prenom: true,
            email: true,
          },
        },
      },
    });
    if (!produit) return res.status(404).json({ error: "Produit non trouvé" });
    res.json(produit);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update
const updateProduit = async (req, res) => {
  try {
    const produit = await prisma.produit.update({
      where: { idProduit: req.params.id },
      data: req.body,
    });
    res.json(produit);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete
const deleteProduit = async (req, res) => {
  try {
    await prisma.produit.delete({ where: { idProduit: req.params.id } });
    res.json({ message: "Produit supprimé" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createProduit,
  getAllProduits,
  getProduitById,
  updateProduit,
  deleteProduit,
};
