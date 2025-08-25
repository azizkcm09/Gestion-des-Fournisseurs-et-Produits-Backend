const { PrismaClient } = require("../generated/prisma");
const prisma = new PrismaClient();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const registerUser = async (req, res) => {
  try {
    const { nom, prenom, email, mdp } = req.body;

    // Hash the password
    const hashedPassword = await bcrypt.hash(mdp, 10);

    // Create the new user with role 'client'
    const newUser = await prisma.user.create({
      data: {
        nom,
        prenom,
        email,
        mdp: hashedPassword,
      },
    });

    // Generate JWT token
    const token = jwt.sign(
      { id: newUser.id, role: newUser.role },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    // Remove password before sending response
    const { mdp: _, ...userWithoutPassword } = newUser;

    res.status(201).json({ token, user: userWithoutPassword });
  } catch (err) {
    console.error(err);
    res.status(400).json({ message: err.message });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, mdp } = req.body;

    // Find user by email
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return res.status(404).json({ message: "Utilisateur non trouvé" });
    }

    // Compare password
    const isMatch = await bcrypt.compare(mdp, user.mdp);
    if (!isMatch) {
      return res.status(401).json({ message: "Mot de passe incorrect" });
    }

    // Generate JWT
    const token = jwt.sign(
      { id: user.id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    // Remove password before sending user object
    const { mdp: _, ...userWithoutPassword } = user;

    res.json({ token, user: userWithoutPassword });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
};

//create user
const createUser = async (req, res) => {
  try {
    const { mdp, ...rest } = req.body;

    // Hash the password using bcrypt
    const hashedPassword = await bcrypt.hash(mdp, 10); // 10 = salt rounds

    const user = await prisma.user.create({
      data: {
        ...rest,
        mdp: hashedPassword,
      },
    });

    res.status(201).json(user);
  } catch (error) {
    console.error("❌ Error in createUser:", error);
    res.status(400).json({ error: error.message });
  }
};
//get all users with pagination
const getAllUsers = async (req, res) => {
  try {
    // Récupérer page et limit depuis query params, avec valeurs par défaut
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 4;

    // Calcul du décalage (skip)
    const skip = (page - 1) * limit;

    // Récupérer le nombre total d'utilisateurs
    const totalUsers = await prisma.user.count();

    // Récupérer les utilisateurs paginés
    const users = await prisma.user.findMany({
      skip,
      take: limit,
      orderBy: { createdAt: "desc" }, // facultatif : pour trier
    });

    res.status(200).json({
      page,
      limit,
      totalUsers,
      totalPages: Math.ceil(totalUsers / limit),
      users,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//get userbyId
const getUserById = async (req, res) => {
  try {
    const user = await prisma.user.findUnique({
      where: { id: req.params.id },
    });
    if (!user) return res.status(404).json({ error: "User not found" });
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
//update user
const updateUser = async (req, res) => {
  try {
    const { mdp, ...rest } = req.body;
    let dataToUpdate = { ...rest };

    if (mdp) {
      const hashedPassword = await bcrypt.hash(mdp, 10);
      dataToUpdate.mdp = hashedPassword;
    }

    const updatedUser = await prisma.user.update({
      where: { id: req.params.id },
      data: dataToUpdate,
    });

    res.json(updatedUser);
  } catch (error) {
    console.error("❌ Error in updateUser:", error);
    res.status(400).json({ error: error.message });
  }
};

//delete user
const deleteUser = async (req, res) => {
  try {
    await prisma.user.delete({
      where: { id: req.params.id },
    });
    res.json({ message: "User deleted" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
  registerUser,
  loginUser,
};
