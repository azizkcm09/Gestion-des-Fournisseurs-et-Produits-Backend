const { PrismaClient } = require("../generated/prisma");
const prisma = new PrismaClient();

// Get Dashboard Statistics
const getDashboardStats = async (req, res) => {
  try {
    // Get counts
    const [
      usersCount,
      produitsCount,
      categoriesCount,
      commandesCount,
      users,
      produits,
      commandes,
    ] = await Promise.all([
      prisma.user.count(),
      prisma.produit.count(),
      prisma.categorie.count(),
      prisma.commande.count(),
      prisma.user.findMany({ select: { role: true } }),
      prisma.produit.findMany({ select: { prix: true, quantiteStock: true } }),
      prisma.commande.findMany({
        select: {
          dateCommande: true,
          totalCommande: true,
          statutCommande: true,
        },
      }),
    ]);

    // Calculate details
    const clients = users.filter((u) => u.role === "CLIENT").length;
    const fournisseurs = users.filter((u) => u.role === "FOURNISSEUR").length;
    const produitsEnStock = produits.filter((p) => p.quantiteStock > 0).length;
    const totalStockValue = produits.reduce(
      (sum, p) => sum + p.prix * p.quantiteStock,
      0
    );

    // Recent orders (last 30 days)
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
    const recentOrders = commandes.filter(
      (c) => new Date(c.dateCommande) > thirtyDaysAgo
    );

    // Total revenue
    const totalRevenue = commandes
      .filter((c) => c.statutCommande === "LIVREE")
      .reduce((sum, c) => sum + c.totalCommande, 0);

    res.json({
      users: {
        total: usersCount,
        clients,
        fournisseurs,
      },
      produits: {
        total: produitsCount,
        enStock: produitsEnStock,
        stockValue: totalStockValue,
      },
      categories: {
        total: categoriesCount,
      },
      commandes: {
        total: commandesCount,
        recent: recentOrders.length,
        revenue: totalRevenue,
      },
    });
  } catch (error) {
    console.error("Error fetching dashboard stats:", error);
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getDashboardStats,
};
