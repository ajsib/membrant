// sessionControllers.js

const Session = require("../models/Session");

const sessionControllers = {
  // Create a new session
  createSession: async (req, res) => {
    try {
      const { userId } = req.body;
      const newSession = new Session({
        userId,
        createdAt: new Date(),
        expiredAt: new Date(Date.now() + 24 * 60 * 60 * 1000), // 24 hours from now
      });

      const savedSession = await newSession.save();
      res.status(201).json(savedSession);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  // Retrieve a session by ID
  getSessionById: async (req, res) => {
    try {
      const session = await Session.findById(req.params.sessionId);
      if (session) {
        res.status(200).json(session);
      } else {
        res.status(404).json({ message: "Session not found" });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  // Delete a session
  deleteSession: async (req, res) => {
    try {
      const session = await Session.findByIdAndDelete(req.params.sessionId);
      if (session) {
        res.status(200).json({ message: "Session deleted successfully" });
      } else {
        res.status(404).json({ message: "Session not found" });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  // List all sessions for a specific user
  listUserSessions: async (req, res) => {
    try {
      const sessions = await Session.find({ userId: req.params.userId });
      res.status(200).json(sessions);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
};

module.exports = sessionControllers;
