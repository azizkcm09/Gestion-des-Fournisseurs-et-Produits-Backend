const express = require("express");
const router = express.Router();
const produitController = require("../controllers/produit.controller");
const { authenticateToken, isFournisseur } = require("../middlewares/auth");
const upload = require("../middlewares/upload");

router.post(
  "/create",
  upload.single("imageURL"),
  produitController.createProduit
);
// router.post(
//   "/create",
//   authenticateToken,
//   isFournisseur,
//   produitController.createProduit
// );
router.get("/", produitController.getAllProduits);
router.get("/:id", produitController.getProduitById);
router.put(
  "/:id",
  authenticateToken,
  isFournisseur,
  produitController.updateProduit
);
router.delete("/:id", produitController.deleteProduit);

module.exports = router;
