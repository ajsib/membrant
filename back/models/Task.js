const mongoose = require("mongoose");
const TimeLogged = require("./TimeLogged");
const User = require("./User");

// Task Schema
const taskSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  projectId: { type: mongoose.Schema.Types.ObjectId, ref: "Project" },
  title: { type: String, required: true },
  description: { type: String },
  assignedTo: {
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  },
  priority: { type: String },
  status: { type: String },
  deadline: { type: Date },
  createdAt: { type: Date, default: Date.now },
  timeLogged: [TimeLogged.schema],
});

// Task Model
const Task = mongoose.model("Task", taskSchema);

module.exports = Task;
