const mongoose = require("mongoose");

// Project Schema
const projectSchema = new mongoose.Schema({
  projectId: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  description: { type: String },
  createdBy: { type: String, required: true },
  members: { type: [String], default: [] },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date },
  status: { type: String },
  deadline: { type: Date },
  sharedWith: { type: [String], default: [] },
});

// Project Model
const Project = mongoose.model("Project", projectSchema);

module.exports = Project;
