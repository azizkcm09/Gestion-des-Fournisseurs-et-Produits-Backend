const express = require("express");
const router = express.Router();
const categorieController = require("../controllers/categorie.controller");
const { authenticateToken, isAdmin } = require("../middlewares/auth");

router.post(
  "/",
  authenticateToken,
  isAdmin,
  categorieController.createCategorie
);
router.get("/", categorieController.getAllCategories);
router.get("/:id", categorieController.getCategorieById);
router.put(
  "/:id",
  authenticateToken,
  isAdmin,
  categorieController.updateCategorie
);
router.delete(
  "/:id",
  authenticateToken,
  isAdmin,
  categorieController.deleteCategorie
);

module.exports = router;
