const mongoose = require("mongoose");

// Session Schema
const sessionSchema = new mongoose.Schema({
  user: { 
    id: {type: mongoose.Schema.Types.ObjectId, ref: "User", required: true},
    name: {type: String, required: true},
    email: {type: String, required: true},
  },
  token: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  expiredAt: { type: Date, required: true },
});

// Session Model
const Session = mongoose.model("Session", sessionSchema);

module.exports = Session;
