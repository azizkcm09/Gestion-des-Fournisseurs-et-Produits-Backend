const { PrismaClient } = require("../generated/prisma");
const bcrypt = require("bcrypt");

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Starting database seeding...");

  // Clear existing data
  console.log("🗑️  Cleaning up existing data...");
  await prisma.alerteStock.deleteMany();
  await prisma.ligneCommande.deleteMany();
  await prisma.livraison.deleteMany();
  await prisma.commande.deleteMany();
  await prisma.produit.deleteMany();
  await prisma.categorie.deleteMany();
  await prisma.rapport.deleteMany();
  await prisma.user.deleteMany();

  // Hash password
  const hashedPassword = await bcrypt.hash("password123", 10);

  // Create Users
  console.log("👥 Creating users...");
  const admin = await prisma.user.create({
    data: {
      nom: "Admin",
      prenom: "Super",
      email: "admin@example.com",
      mdp: hashedPassword,
      adresse: "123 Admin Street, Paris",
      statut: "ACTIF",
      role: "ADMIN",
    },
  });

  const client1 = await prisma.user.create({
    data: {
      nom: "Dupont",
      prenom: "Jean",
      email: "jean.dupont@example.com",
      mdp: hashedPassword,
      adresse: "45 Rue de la République, Lyon",
      statut: "ACTIF",
      role: "CLIENT",
    },
  });

  const client2 = await prisma.user.create({
    data: {
      nom: "Martin",
      prenom: "Sophie",
      email: "sophie.martin@example.com",
      mdp: hashedPassword,
      adresse: "78 Avenue des Champs, Marseille",
      statut: "ACTIF",
      role: "CLIENT",
    },
  });

  const fournisseur1 = await prisma.user.create({
    data: {
      nom: "TechSupply",
      prenom: "Distribution",
      email: "contact@techsupply.com",
      mdp: hashedPassword,
      adresse: "10 Boulevard Tech, Paris",
      statut: "ACTIF",
      role: "FOURNISSEUR",
    },
  });

  const fournisseur2 = await prisma.user.create({
    data: {
      nom: "FoodDistrib",
      prenom: "Wholesale",
      email: "info@fooddistrib.com",
      mdp: hashedPassword,
      adresse: "25 Rue des Marchés, Toulouse",
      statut: "ACTIF",
      role: "FOURNISSEUR",
    },
  });

  console.log("✅ Users created!");

  // Create Categories
  console.log("📁 Creating categories...");
  const categorieElectronique = await prisma.categorie.create({
    data: {
      nomCategorie: "Électronique",
      descriptionCategorie: "Appareils et accessoires électroniques",
      typeCategorie: "Tech",
      imageCategorie: "/uploads/category-electronics.jpg",
    },
  });

  const categorieVetements = await prisma.categorie.create({
    data: {
      nomCategorie: "Vêtements",
      descriptionCategorie: "Mode et accessoires vestimentaires",
      typeCategorie: "Fashion",
      imageCategorie: "/uploads/category-clothing.jpg",
    },
  });

  const categorieMaison = await prisma.categorie.create({
    data: {
      nomCategorie: "Maison & Jardin",
      descriptionCategorie: "Articles pour la maison et le jardin",
      typeCategorie: "Home",
      imageCategorie: "/uploads/category-home.jpg",
    },
  });

  const categorieSport = await prisma.categorie.create({
    data: {
      nomCategorie: "Sport & Loisirs",
      descriptionCategorie: "Équipements sportifs et loisirs",
      typeCategorie: "Sport",
      imageCategorie: "/uploads/category-sport.jpg",
    },
  });

  const categorieAlimentaire = await prisma.categorie.create({
    data: {
      nomCategorie: "Alimentation",
      descriptionCategorie: "Produits alimentaires et boissons",
      typeCategorie: "Food",
      imageCategorie: "/uploads/category-food.jpg",
    },
  });

  console.log("✅ Categories created!");

  // Create Products with Unsplash images (they work without API key)
  console.log("📦 Creating products...");

  // All products with Unsplash images
  await prisma.produit.create({
    data: {
      nom: "MacBook Pro 14''",
      description:
        "Ordinateur portable haute performance avec puce M3 Pro, 16GB RAM, 512GB SSD",
      prix: 2499.99,
      quantiteStock: 15,
      typeProduit: "Ordinateur portable",
      imageURL:
        "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=300&fit=crop",
      statutProduit: "DISPONIBLE",
      categorieId: categorieElectronique.idCategorie,
      fournisseurId: fournisseur1.id,
    },
  });

  await prisma.produit.create({
    data: {
      nom: "iPhone 15 Pro",
      description:
        "Smartphone premium avec écran OLED 6.1'', caméra 48MP, 256GB",
      prix: 1299.99,
      quantiteStock: 25,
      typeProduit: "Smartphone",
      imageURL:
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=300&fit=crop",
      statutProduit: "DISPONIBLE",
      categorieId: categorieElectronique.idCategorie,
      fournisseurId: fournisseur1.id,
    },
  });

  // Use Unsplash URLs for other products (they work reliably)
  await prisma.produit.create({
    data: {
      nom: "AirPods Pro (2ème génération)",
      description:
        "Écouteurs sans fil avec réduction de bruit active, autonomie 30h",
      prix: 279.99,
      quantiteStock: 50,
      typeProduit: "Audio",
      imageURL:
        "https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7?w=400&h=300&fit=crop",
      statutProduit: "DISPONIBLE",
      categorieId: categorieElectronique.idCategorie,
      fournisseurId: fournisseur1.id,
    },
  });

  await prisma.produit.create({
    data: {
      nom: "Samsung Galaxy Tab S9",
      description: "Tablette Android 11'', 128GB, S-Pen inclus",
      prix: 749.99,
      quantiteStock: 8,
      typeProduit: "Tablette",
      imageURL:
        "https://images.unsplash.com/photo-1561154464-82e9adf32764?w=400&h=300&fit=crop",
      statutProduit: "DISPONIBLE",
      categorieId: categorieElectronique.idCategorie,
      fournisseurId: fournisseur1.id,
    },
  });

  await prisma.produit.create({
    data: {
      nom: "Clavier Mécanique RGB",
      description:
        "Clavier gaming mécanique avec switches Cherry MX, rétroéclairage RGB",
      prix: 149.99,
      quantiteStock: 0,
      typeProduit: "Périphérique",
      imageURL:
        "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400&h=300&fit=crop",
      statutProduit: "DISPONIBLE",
      categorieId: categorieElectronique.idCategorie,
      fournisseurId: fournisseur1.id,
    },
  });

  await prisma.produit.create({
    data: {
      nom: "T-Shirt Premium Coton",
      description: "T-shirt 100% coton bio, disponible en plusieurs couleurs",
      prix: 29.99,
      quantiteStock: 100,
      typeProduit: "Vêtement",
      imageURL:
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=300&fit=crop",
      statutProduit: "DISPONIBLE",
      categorieId: categorieVetements.idCategorie,
      fournisseurId: fournisseur2.id,
    },
  });

  await prisma.produit.create({
    data: {
      nom: "Jean Slim Fit",
      description: "Jean slim fit en denim stretch, coupe moderne",
      prix: 79.99,
      quantiteStock: 45,
      typeProduit: "Pantalon",
      imageURL:
        "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=300&fit=crop",
      statutProduit: "DISPONIBLE",
      categorieId: categorieVetements.idCategorie,
      fournisseurId: fournisseur2.id,
    },
  });

  await prisma.produit.create({
    data: {
      nom: "Veste en Cuir",
      description:
        "Veste en cuir véritable, doublure en soie, finition premium",
      prix: 299.99,
      quantiteStock: 12,
      typeProduit: "Veste",
      imageURL:
        "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=300&fit=crop",
      statutProduit: "DISPONIBLE",
      categorieId: categorieVetements.idCategorie,
      fournisseurId: fournisseur2.id,
    },
  });

  await prisma.produit.create({
    data: {
      nom: "Cafetière Italienne",
      description: "Cafetière espresso en acier inoxydable, capacité 6 tasses",
      prix: 39.99,
      quantiteStock: 30,
      typeProduit: "Cuisine",
      imageURL:
        "https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=400&h=300&fit=crop",
      statutProduit: "DISPONIBLE",
      categorieId: categorieMaison.idCategorie,
      fournisseurId: fournisseur2.id,
    },
  });

  await prisma.produit.create({
    data: {
      nom: "Aspirateur Robot",
      description:
        "Aspirateur robot intelligent avec navigation laser et app mobile",
      prix: 399.99,
      quantiteStock: 18,
      typeProduit: "Électroménager",
      imageURL:
        "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=400&h=300&fit=crop",
      statutProduit: "DISPONIBLE",
      categorieId: categorieMaison.idCategorie,
      fournisseurId: fournisseur1.id,
    },
  });

  await prisma.produit.create({
    data: {
      nom: "Set de Couteaux Chef",
      description:
        "Set de 5 couteaux professionnels en acier japonais avec bloc",
      prix: 199.99,
      quantiteStock: 7,
      typeProduit: "Cuisine",
      imageURL:
        "https://images.unsplash.com/photo-1593618998160-e34014e67546?w=400&h=300&fit=crop",
      statutProduit: "DISPONIBLE",
      categorieId: categorieMaison.idCategorie,
      fournisseurId: fournisseur2.id,
    },
  });

  await prisma.produit.create({
    data: {
      nom: "Tapis de Yoga Premium",
      description:
        "Tapis de yoga antidérapant, épaisseur 6mm, housse de transport incluse",
      prix: 49.99,
      quantiteStock: 40,
      typeProduit: "Fitness",
      imageURL:
        "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=400&h=300&fit=crop",
      statutProduit: "DISPONIBLE",
      categorieId: categorieSport.idCategorie,
      fournisseurId: fournisseur2.id,
    },
  });

  await prisma.produit.create({
    data: {
      nom: "Vélo de Route Carbon",
      description: "Vélo de route en carbone, groupe Shimano 105, poids 8.5kg",
      prix: 1899.99,
      quantiteStock: 5,
      typeProduit: "Vélo",
      imageURL:
        "https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=400&h=300&fit=crop",
      statutProduit: "DISPONIBLE",
      categorieId: categorieSport.idCategorie,
      fournisseurId: fournisseur1.id,
    },
  });

  await prisma.produit.create({
    data: {
      nom: "Haltères Réglables 20kg",
      description:
        "Paire d'haltères réglables de 2.5 à 20kg, compact et pratique",
      prix: 179.99,
      quantiteStock: 22,
      typeProduit: "Musculation",
      imageURL:
        "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400&h=300&fit=crop",
      statutProduit: "DISPONIBLE",
      categorieId: categorieSport.idCategorie,
      fournisseurId: fournisseur2.id,
    },
  });

  await prisma.produit.create({
    data: {
      nom: "Café Bio Éthiopie",
      description:
        "Café grain 100% arabica bio d'Éthiopie, torréfaction artisanale 1kg",
      prix: 24.99,
      quantiteStock: 60,
      typeProduit: "Boisson",
      imageURL:
        "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=400&h=300&fit=crop",
      statutProduit: "DISPONIBLE",
      categorieId: categorieAlimentaire.idCategorie,
      fournisseurId: fournisseur2.id,
    },
  });

  await prisma.produit.create({
    data: {
      nom: "Miel de Lavande Bio",
      description: "Miel de lavande bio de Provence, pot en verre 500g",
      prix: 14.99,
      quantiteStock: 35,
      typeProduit: "Produit sucré",
      imageURL:
        "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=400&h=300&fit=crop",
      statutProduit: "DISPONIBLE",
      categorieId: categorieAlimentaire.idCategorie,
      fournisseurId: fournisseur2.id,
    },
  });

  await prisma.produit.create({
    data: {
      nom: "Huile d'Olive Extra Vierge",
      description:
        "Huile d'olive extra vierge première pression à froid, 750ml",
      prix: 19.99,
      quantiteStock: 3,
      typeProduit: "Condiment",
      imageURL:
        "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=400&h=300&fit=crop",
      statutProduit: "DISPONIBLE",
      categorieId: categorieAlimentaire.idCategorie,
      fournisseurId: fournisseur2.id,
    },
  });

  await prisma.produit.create({
    data: {
      nom: "T-Shirt Sport Performance",
      description: "T-shirt technique respirant pour le sport",
      prix: 39.99,
      quantiteStock: 75,
      typeProduit: "Vêtement",
      imageURL:
        "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=400&h=300&fit=crop",
      statutProduit: "DISPONIBLE",
      categorieId: categorieVetements.idCategorie,
      fournisseurId: fournisseur2.id,
    },
  });

  await prisma.produit.create({
    data: {
      nom: "Montre Connectée Smart",
      description: "Montre connectée avec suivi santé, GPS, étanche 50m",
      prix: 249.99,
      quantiteStock: 20,
      typeProduit: "Accessoire",
      imageURL:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=300&fit=crop",
      statutProduit: "DISPONIBLE",
      categorieId: categorieElectronique.idCategorie,
      fournisseurId: fournisseur1.id,
    },
  });

  await prisma.produit.create({
    data: {
      nom: "Casque Audio Sans Fil",
      description: "Casque Bluetooth avec réduction de bruit, autonomie 40h",
      prix: 189.99,
      quantiteStock: 35,
      typeProduit: "Audio",
      imageURL:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop",
      statutProduit: "DISPONIBLE",
      categorieId: categorieElectronique.idCategorie,
      fournisseurId: fournisseur1.id,
    },
  });

  console.log("✅ Products created!");

  // Create some sample orders
  console.log("📝 Creating sample orders...");
  const commande1 = await prisma.commande.create({
    data: {
      numeroCommande: "CMD-2024-001",
      dateCommande: new Date("2024-01-15"),
      statutCommande: "LIVREE",
      totalCommande: 1579.98,
      taxesAppliquees: 315.99,
      adresseLivraison: "45 Rue de la République, Lyon",
      modePaiement: "Carte bancaire",
      datePaiement: new Date("2024-01-15"),
      clientId: client1.id,
    },
  });

  const commande2 = await prisma.commande.create({
    data: {
      numeroCommande: "CMD-2024-002",
      dateCommande: new Date("2024-01-20"),
      statutCommande: "EN_PREPARATION",
      totalCommande: 629.97,
      taxesAppliquees: 125.99,
      adresseLivraison: "78 Avenue des Champs, Marseille",
      modePaiement: "PayPal",
      datePaiement: new Date("2024-01-20"),
      clientId: client2.id,
    },
  });

  console.log("✅ Orders created!");

  console.log("🎉 Database seeding completed successfully!");
  console.log("\n📊 Summary:");
  console.log("- Users: 5 (1 Admin, 2 Clients, 2 Fournisseurs)");
  console.log("- Categories: 5");
  console.log("- Products: 17 (All with Unsplash images)");
  console.log("- Orders: 2");
  console.log("\n🔑 Login credentials:");
  console.log("Admin: admin@example.com / password123");
  console.log("Client: jean.dupont@example.com / password123");
  console.log("Client: sophie.martin@example.com / password123");
  console.log("Fournisseur: contact@techsupply.com / password123");
  console.log("Fournisseur: info@fooddistrib.com / password123");
}

main()
  .catch((e) => {
    console.error("❌ Error during seeding:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
