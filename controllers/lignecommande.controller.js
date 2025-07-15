const { PrismaClient } = require("../generated/prisma");
const prisma = new PrismaClient();

// Create
const createLigneCommande = async (req, res) => {
  try {
    const ligne = await prisma.ligneCommande.create({ data: req.body });
    res.status(201).json(ligne);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all
const getAllLignesCommande = async (req, res) => {
  try {
    const lignes = await prisma.ligneCommande.findMany({
      include: { commande: true, produit: true },
    });
    res.json(lignes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get by ID
const getLigneCommandeById = async (req, res) => {
  try {
    const ligne = await prisma.ligneCommande.findUnique({
      where: { idLigneCommande: req.params.id },
      include: { commande: true, produit: true },
    });
    if (!ligne) return res.status(404).json({ error: "Ligne non trouvée" });
    res.json(ligne);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update
const updateLigneCommande = async (req, res) => {
  try {
    const updated = await prisma.ligneCommande.update({
      where: { idLigneCommande: req.params.id },
      data: req.body,
    });
    res.json(updated);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete
const deleteLigneCommande = async (req, res) => {
  try {
    await prisma.ligneCommande.delete({
      where: { idLigneCommande: req.params.id },
    });
    res.json({ message: "Ligne supprimée" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createLigneCommande,
  getAllLignesCommande,
  getLigneCommandeById,
  updateLigneCommande,
  deleteLigneCommande,
};
