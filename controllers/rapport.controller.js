const { PrismaClient } = require("../generated/prisma");
const prisma = new PrismaClient();

// Create
const createRapport = async (req, res) => {
  try {
    const rapport = await prisma.rapport.create({ data: req.body });
    res.status(201).json(rapport);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get All
const getAllRapports = async (req, res) => {
  try {
    const rapports = await prisma.rapport.findMany({
      include: { admin: true },
    });
    res.json(rapports);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get By ID
const getRapportById = async (req, res) => {
  try {
    const rapport = await prisma.rapport.findUnique({
      where: { idRapport: req.params.id },
      include: { admin: true },
    });
    if (!rapport) return res.status(404).json({ error: "Rapport non trouvé" });
    res.json(rapport);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update
const updateRapport = async (req, res) => {
  try {
    const updated = await prisma.rapport.update({
      where: { idRapport: req.params.id },
      data: req.body,
    });
    res.json(updated);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete
const deleteRapport = async (req, res) => {
  try {
    await prisma.rapport.delete({
      where: { idRapport: req.params.id },
    });
    res.json({ message: "Rapport supprimé" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createRapport,
  getAllRapports,
  getRapportById,
  updateRapport,
  deleteRapport,
};
