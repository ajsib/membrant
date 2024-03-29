// ./middlewares/authenticate.js
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config/env");
const Session = require("../models/Session");
const User = require("../models/User");

const authenticate = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
      return res.status(401).json({ message: "No token provided" });
    }

    const decoded = jwt.verify(token, JWT_SECRET);
    const session = await Session.findOne({
      token: token,
    });

    if (!session) {
      return res.status(401).json({ message: "Invalid or expired token" });
    }

    // Verify if the user associated with the session exists
    const user = await User.findById(decoded.userId);
    if (!user) {
      return res.status(401).json({ message: "User no longer exists" });
    }

    req.user = user; // Optionally pass the entire user object
    next(); // Proceed to the next middleware or route handler
  } catch (error) {
    if (error.name === "JsonWebTokenError") {
      return res.status(401).json({ message: "Invalid token" });
    }
    res.status(500).json({ message: error.message });
  }
};

module.exports = authenticate;
