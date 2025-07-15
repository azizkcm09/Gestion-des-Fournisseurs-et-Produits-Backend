const express = require("express");
const router = express.Router();
const controller = require("../controllers/lignecommande.controller");

router.post("/", controller.createLigneCommande);
router.get("/", controller.getAllLignesCommande);
router.get("/:id", controller.getLigneCommandeById);
router.put("/:id", controller.updateLigneCommande);
router.delete("/:id", controller.deleteLigneCommande);

module.exports = router;
