const express = require("express");
const router = express.Router();
const controller = require("../controllers/livraison.controller");
const { authenticateToken, isAdmin } = require("../middlewares/auth");

router.post("/", controller.createLivraison);
router.get("/", authenticateToken, isAdmin, controller.getAllLivraisons);
router.get("/:id", controller.getLivraisonById);
router.put("/:id", controller.updateLivraison);
router.delete("/:id", controller.deleteLivraison);

module.exports = router;
