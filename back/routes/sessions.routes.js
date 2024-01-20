const express = require("express");
const router = express.Router();

const sessionControllers = require("../controllers/sessionControllers");

// Session routes
router.post("/", sessionControllers.createSession);
router.get("/:sessionId", sessionControllers.getSessionById);
router.delete("/:sessionId", sessionControllers.deleteSession);
router.get("/user/:userId", sessionControllers.listUserSessions);

module.exports = router;
