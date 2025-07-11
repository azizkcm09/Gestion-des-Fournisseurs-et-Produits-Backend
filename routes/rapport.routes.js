const express = require("express");
const router = express.Router();
const controller = require("../controllers/rapport.controller");

router.post("/", controller.createRapport);
router.get("/", controller.getAllRapports);
router.get("/:id", controller.getRapportById);
router.put("/:id", controller.updateRapport);
router.delete("/:id", controller.deleteRapport);

module.exports = router;
