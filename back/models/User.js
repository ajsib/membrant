const mongoose = require("mongoose");

// User Schema
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  session: { type: mongoose.Schema.Types.ObjectId, ref: "Session" },
  createdAt: { type: Date, default: Date.now },
  lastLogin: { type: Date },
});

// User Model
const User = mongoose.model("User", userSchema);
module.exports = User; 
