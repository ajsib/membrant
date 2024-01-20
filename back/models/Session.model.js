const mongoose = require("mongoose");

// Session Schema
const sessionSchema = new mongoose.Schema({
  userId: { type: String, required: true, unique: true },
  sessionId: { type: String, required: true, unique: true },
  token: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  expiredAt: { type: Date, required: true },
});

// Session Model
const Session = mongoose.model("Session", sessionSchema);

module.exports = Session;
