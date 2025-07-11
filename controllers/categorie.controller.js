const { PrismaClient } = require("../generated/prisma");
const prisma = new PrismaClient();

// Create Categorie
const createCategorie = async (req, res) => {
  try {
    const categorie = await prisma.categorie.create({ data: req.body });
    res.status(201).json(categorie);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get All
const getAllCategories = async (req, res) => {
  try {
    const categories = await prisma.categorie.findMany();
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get By ID
const getCategorieById = async (req, res) => {
  try {
    const categorie = await prisma.categorie.findUnique({
      where: { idCategorie: req.params.id },
    });
    if (!categorie)
      return res.status(404).json({ error: "Catégorie non trouvée" });
    res.json(categorie);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update
const updateCategorie = async (req, res) => {
  try {
    const updated = await prisma.categorie.update({
      where: { idCategorie: req.params.id },
      data: req.body,
    });
    res.json(updated);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete
const deleteCategorie = async (req, res) => {
  try {
    await prisma.categorie.delete({
      where: { idCategorie: req.params.id },
    });
    res.json({ message: "Catégorie supprimée" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createCategorie,
  getAllCategories,
  getCategorieById,
  updateCategorie,
  deleteCategorie,
};
