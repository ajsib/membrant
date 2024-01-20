const Task = require("../models/Task");

// Create a new task
exports.createTask = async (req, res) => {
  try {
    const newTask = new Task({
      projectId: req.body.projectId,
      title: req.body.title,
      description: req.body.description,
      assignedTo: req.body.assignedTo,
      priority: req.body.priority,
      status: req.body.status,
      deadline: req.body.deadline,
      createdAt: new Date(),
      updatedAt: new Date(),
      timeLogged: req.body.timeLogged,
    });

    const savedTask = await newTask.save();
    res.status(201).json(savedTask);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get a task by ID
exports.getTaskById = async (req, res) => {
  try {
    const task = await Task.findById(req.params.taskId);
    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }
    res.status(200).json(task);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update a task
exports.updateTask = async (req, res) => {
  try {
    const updatedTask = await Task.findByIdAndUpdate(
      req.params.taskId,
      { ...req.body, updatedAt: new Date() },
      { new: true }
    );
    if (!updatedTask) {
      return res.status(404).json({ message: "Task not found" });
    }
    res.status(200).json(updatedTask);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a task
exports.deleteTask = async (req, res) => {
  try {
    const deletedTask = await Task.findByIdAndDelete(req.params.taskId);
    if (!deletedTask) {
      return res.status(404).json({ message: "Task not found" });
    }
    res.status(200).json({ message: "Task successfully deleted" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// List tasks (with optional filters)
exports.listTasks = async (req, res) => {
  try {
    const filters = req.query; // You can add more sophisticated filtering logic
    const tasks = await Task.find(filters);
    res.status(200).json(tasks);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Assign a task to a user
exports.assignTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(
      req.params.taskId,
      { assignedTo: req.body.userId, updatedAt: new Date() },
      { new: true }
    );
    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }
    res.status(200).json(task);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Log time for a task
exports.logTaskTime = async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(
      req.params.taskId,
      { timeLogged: req.body.timeLogged, updatedAt: new Date() },
      { new: true }
    );
    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }
    res.status(200).json(task);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
