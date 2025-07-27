const express = require("express");
const router = express.Router();
const commandeController = require("../controllers/commande.controller");
const { authenticateToken, isAdmin, isClient } = require("../middlewares/auth");

router.post(
  "/",
  authenticateToken,
  isClient,
  commandeController.createCommande
);
router.get("/", authenticateToken, isAdmin, commandeController.getAllCommandes);
router.get(
  "/:id",
  authenticateToken,
  isClient,
  commandeController.getCommandeById
);
router.put("/:id", commandeController.updateCommande);
router.delete("/:id", commandeController.deleteCommande);

module.exports = router;
