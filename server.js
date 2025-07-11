const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const userRoutes = require("./routes/user.routes");
const produitRoutes = require("./routes/produit.routes");
const categorieRoutes = require("./routes/categorie.routes");
const commandeRoutes = require("./routes/commande.routes");
const ligneCommandeRoutes = require("./routes/lignecommande.routes");
const livraisonRoutes = require("./routes/livraison.routes");
const rapportRoutes = require("./routes/rapport.routes");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

// Routes
app.use("/api/users", userRoutes);
app.use("/api/produits", produitRoutes);
app.use("/api/categories", categorieRoutes);
app.use("/api/commandes", commandeRoutes);
app.use("/api/lignes-commande", ligneCommandeRoutes);
app.use("/api/livraisons", livraisonRoutes);
app.use("/api/rapports", rapportRoutes);

app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
