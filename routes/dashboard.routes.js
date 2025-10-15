const express = require("express");
const router = express.Router();
const dashboardController = require("../controllers/dashboard.controller");
const { authenticateToken, isAdmin } = require("../middlewares/auth");

router.get(
  "/stats",
  authenticateToken,
  isAdmin,
  dashboardController.getDashboardStats
);

module.exports = router;
