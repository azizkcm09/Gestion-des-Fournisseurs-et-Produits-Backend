const { PrismaClient } = require("../generated/prisma");
const prisma = new PrismaClient();

// Create
const createAlerteStock = async (req, res) => {
  try {
    const alerte = await prisma.alerteStock.create({ data: req.body });
    res.status(201).json(alerte);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get All
const getAllAlertesStock = async (req, res) => {
  try {
    const alertes = await prisma.alerteStock.findMany({
      include: { produit: true, admin: true },
    });
    res.json(alertes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get by ID
const getAlerteStockById = async (req, res) => {
  try {
    const alerte = await prisma.alerteStock.findUnique({
      where: { idAlerte: req.params.id },
      include: { produit: true, admin: true },
    });
    if (!alerte) return res.status(404).json({ error: "Alerte non trouvée" });
    res.json(alerte);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update
const updateAlerteStock = async (req, res) => {
  try {
    const updated = await prisma.alerteStock.update({
      where: { idAlerte: req.params.id },
      data: req.body,
    });
    res.json(updated);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete
const deleteAlerteStock = async (req, res) => {
  try {
    await prisma.alerteStock.delete({
      where: { idAlerte: req.params.id },
    });
    res.json({ message: "Alerte supprimée" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createAlerteStock,
  getAllAlertesStock,
  getAlerteStockById,
  updateAlerteStock,
  deleteAlerteStock,
};
