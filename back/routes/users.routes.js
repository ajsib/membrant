const express = require("express");
const router = express.Router();

const userControllers = require("../controllers/userControllers");
const authenticate = require("../middleware/authenticate");

// User Routes
router.post("/", userControllers.createUser);
router.post("/login", userControllers.loginUser);
router.get("/:userId", authenticate, userControllers.getUserById);
router.patch("/:userId", authenticate, userControllers.updateUser);
router.delete("/:userId", authenticate, userControllers.deleteUser);
router.get("/", authenticate, userControllers.listUsers);
router.patch("/:userId/password", authenticate, userControllers.changePassword);
router.post("/authenticate", userControllers.authenticateUser);

module.exports = router;
