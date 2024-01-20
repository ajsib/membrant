const mongoose = require("mongoose");

// Task Schema
const taskSchema = new mongoose.Schema({
  taskId: { type: String, required: true, unique: true },
  projectId: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String },
  assignedTo: { type: String },
  priority: { type: String },
  status: { type: String },
  deadline: { type: Date },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date },
  timeLogged: { type: Number, default: 0 },
});

// Task Model
const Task = mongoose.model("Task", taskSchema);

module.exports = Task;
