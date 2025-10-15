const { PrismaClient } = require("../generated/prisma");
const prisma = new PrismaClient();

// Create Commande
const createCommande = async (req, res) => {
  try {
    const commande = await prisma.commande.create({ data: req.body });
    res.status(201).json(commande);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get All
const getAllCommandes = async (req, res) => {
  try {
    const commandes = await prisma.commande.findMany({
      include: {
        client: {
          select: {
            id: true,
            nom: true,
            prenom: true,
            email: true,
          },
        },
        lignesCommande: {
          include: {
            produit: {
              select: {
                nom: true,
                prix: true,
                imageURL: true,
              },
            },
          },
        },
        livraison: true,
      },
      orderBy: {
        dateCommande: "desc",
      },
    });
    res.status(200).json(commandes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get by ID
const getCommandeById = async (req, res) => {
  try {
    const commande = await prisma.commande.findUnique({
      where: { idCommande: req.params.id },
      include: { lignesCommande: true, livraison: true },
    });
    if (!commande)
      return res.status(404).json({ error: "Commande non trouvée" });
    res.json(commande);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update
const updateCommande = async (req, res) => {
  try {
    const { statutCommande, ...otherData } = req.body;

    const updated = await prisma.commande.update({
      where: { idCommande: parseInt(req.params.id) },
      data: {
        ...otherData,
        ...(statutCommande && { statutCommande }),
        ...(statutCommande && { dateModification: new Date() }),
      },
      include: {
        client: {
          select: {
            id: true,
            nom: true,
            prenom: true,
            email: true,
          },
        },
        lignesCommande: {
          include: {
            produit: {
              select: {
                nom: true,
                prix: true,
                imageURL: true,
              },
            },
          },
        },
        livraison: true,
      },
    });
    res.json(updated);
  } catch (error) {
    console.error("Update commande error:", error);
    res.status(400).json({ error: error.message });
  }
};

// Delete
const deleteCommande = async (req, res) => {
  try {
    await prisma.commande.delete({
      where: { idCommande: req.params.id },
    });
    res.json({ message: "Commande supprimée" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createCommande,
  getAllCommandes,
  getCommandeById,
  updateCommande,
  deleteCommande,
};
