const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");
const { authenticateToken, isAdmin } = require("../middlewares/auth");

router.post("/register", userController.registerUser); // inscription client
router.post("/login", userController.loginUser); // connexion
router.post("/create", authenticateToken, isAdmin, userController.createUser);
router.get("/", authenticateToken, isAdmin, userController.getAllUsers);
router.get("/:id", userController.getUserById);
router.put("/:id", userController.updateUser);
router.delete("/:id", userController.deleteUser);

module.exports = router;
