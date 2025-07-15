const { PrismaClient } = require("../generated/prisma");
const prisma = new PrismaClient();

// Create
const createLivraison = async (req, res) => {
  try {
    const livraison = await prisma.livraison.create({ data: req.body });
    res.status(201).json(livraison);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all
const getAllLivraisons = async (req, res) => {
  try {
    const livraisons = await prisma.livraison.findMany({
      include: { commande: true, livreur: true },
    });
    res.json(livraisons);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get by ID
const getLivraisonById = async (req, res) => {
  try {
    const livraison = await prisma.livraison.findUnique({
      where: { idLivraison: req.params.id },
      include: { commande: true, livreur: true },
    });
    if (!livraison)
      return res.status(404).json({ error: "Livraison non trouvée" });
    res.json(livraison);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update
const updateLivraison = async (req, res) => {
  try {
    const updated = await prisma.livraison.update({
      where: { idLivraison: req.params.id },
      data: req.body,
    });
    res.json(updated);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete
const deleteLivraison = async (req, res) => {
  try {
    await prisma.livraison.delete({
      where: { idLivraison: req.params.id },
    });
    res.json({ message: "Livraison supprimée" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createLivraison,
  getAllLivraisons,
  getLivraisonById,
  updateLivraison,
  deleteLivraison,
};
