const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (!token) return res.status(401).json({ message: "Token manquant" });

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.status(403).json({ message: "Token invalide" });
    req.user = user; // ajoute l’utilisateur décodé dans la requête
    next();
  });
};

const isAdmin = (req, res, next) => {
  if (req.user.role !== "ADMIN") {
    return res
      .status(403)
      .json({ message: "Accès interdit: admin uniquement" });
  }
  next();
};
const isClient = (req, res, next) => {
  if (req.user.role !== "CLIENT") {
    return res
      .status(403)
      .json({ message: "Accès interdit: client uniquement" });
  }
  next();
};
module.exports = {
  authenticateToken,
  isAdmin,
  isClient,
};
