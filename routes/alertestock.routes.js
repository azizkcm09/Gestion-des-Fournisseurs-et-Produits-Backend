const express = require("express");
const router = express.Router();
const controller = require("../controllers/alertestock.controller");

router.post("/", controller.createAlerteStock);
router.get("/", controller.getAllAlertesStock);
router.get("/:id", controller.getAlerteStockById);
router.put("/:id", controller.updateAlerteStock);
router.delete("/:id", controller.deleteAlerteStock);

module.exports = router;
