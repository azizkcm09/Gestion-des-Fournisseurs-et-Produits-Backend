const express = require("express");
const router = express.Router();
const commandeController = require("../controllers/commande.controller");
const { authenticateToken, isAdmin } = require("../middlewares/auth");

router.post("/", commandeController.createCommande);
router.get("/", authenticateToken, isAdmin, commandeController.getAllCommandes);
router.get("/:id", commandeController.getCommandeById);
router.put("/:id", commandeController.updateCommande);
router.delete("/:id", commandeController.deleteCommande);

module.exports = router;
