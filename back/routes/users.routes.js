const express = require("express");
const router = express.Router();

const userControllers = require("../controllers/userControllers");
const authenticate  = require("../middlewares/authenticate");

// User Routes
router.post("/register", userControllers.createUser);
router.post("/login", userControllers.loginUser);
router.get("/:userId", authenticate, userControllers.getUserById);
router.patch("/:userId", authenticate, userControllers.updateUser);
router.delete("/:userId", authenticate, userControllers.deleteUser);
router.get("/", authenticate, userControllers.listUsers);
router.patch("/:userId/password", authenticate, userControllers.changePassword);

module.exports = router;
