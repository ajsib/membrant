// sessionControllers.js
const Session = require('../models/Session'); 
const { JWT_SECRET } = require('../config/env');
const jwt = require('jsonwebtoken');

const sessionControllers = {
    // Create a new session
    createSession: async (req, res) => {
        try {
            const { userId } = req.body;

            // Check if the user exists
            const user = await User.findById(userId);
            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }

            const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: '24h' });
            const expirationDuration = 24 * 60 * 60 * 1000; // 24 hours
            const newSession = new Session({
                userId: user._id,
                token,
                createdAt: new Date(),
                expiredAt: new Date(Date.now() + expirationDuration)
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
                res.status(404).json({ message: 'Session not found' });
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
                res.status(200).json({ message: 'Session deleted successfully' });
            } else {
                res.status(404).json({ message: 'Session not found' });
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
    }
};

module.exports = sessionControllers;
