const { PrismaClient } = require("../generated/prisma");
const prisma = new PrismaClient();
const bcrypt = require("bcrypt");
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
//get all users
const getAllUsers = async (req, res) => {
  try {
    const users = await prisma.user.findMany();
    res.status(200).json(users);
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
};
