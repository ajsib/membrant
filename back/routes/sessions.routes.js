const express = require("express");
const router = express.Router();

const sessionControllers = require("../controllers/sessionControllers");

// Create a new session
router.post("/", sessionControllers.createSession);
// Retrieve a session by ID
router.get("/:sessionId", sessionControllers.getSessionById);
// Delete a session
router.delete("/:sessionId", sessionControllers.deleteSession);
// List all sessions for a specific user
router.get("/user/:userId", sessionControllers.listUserSessions);

module.exports = router;
