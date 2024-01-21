const mongoose = require("mongoose");

// Project Schema
const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  members: { type: [mongoose.Schema.Types.ObjectId], ref: "User" },
  createdAt: { type: Date, default: Date.now },
  status: { type: String },
  deadline: { type: Date },
});

// Project Model
const Project = mongoose.model("Project", projectSchema);

module.exports = Project;
