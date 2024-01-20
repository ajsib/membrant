const express = require("express");
const router = express.Router();

const userControllers = require("../controllers/userControllers");
const authenticate = require("../middleware/authenticate");

// Register a new user
router.post("/", userControllers.createUser);
// Login user
router.post("/login", userControllers.loginUser);
// Get user by ID
router.get("/:userId", authenticate, userControllers.getUserById);
// Update user information
router.patch("/:userId", authenticate, userControllers.updateUser);
// Delete a user
router.delete("/:userId", authenticate, userControllers.deleteUser);
// List users
router.get("/", authenticate, userControllers.listUsers);
// Change password
router.patch("/:userId/password", authenticate, userControllers.changePassword);
// Authenticate user
router.post("/authenticate", userControllers.authenticateUser);
