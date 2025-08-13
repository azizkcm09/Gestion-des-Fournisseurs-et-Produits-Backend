const express = require("express");
const router = express.Router();
const controller = require("../controllers/rapport.controller");
const {
  authenticateToken,
  isAdmin,
  isFournisseur,
  isAdminOrFournisseur,
} = require("../middlewares/auth");

router.post("/", authenticateToken, isAdmin, controller.createRapport);
router.get(
  "/",
  authenticateToken,
  isAdminOrFournisseur,
  controller.getAllRapports
);
router.get("/:id", controller.getRapportById);
router.put("/:id", controller.updateRapport);
router.delete("/:id", controller.deleteRapport);

module.exports = router;
