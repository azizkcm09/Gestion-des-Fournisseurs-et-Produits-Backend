const express = require("express");
const router = express.Router();
const controller = require("../controllers/alertestock.controller");
const { authenticateToken, isAdmin } = require("../middlewares/auth");

router.post("/", authenticateToken, isAdmin, controller.createAlerteStock);
router.get("/", controller.getAllAlertesStock);
router.get("/:id", controller.getAlerteStockById);
router.put("/:id", authenticateToken, isAdmin, controller.updateAlerteStock);
router.delete("/:id", controller.deleteAlerteStock);

module.exports = router;
