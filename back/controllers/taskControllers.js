const Task = require("../models/Task");

// Create a new task
exports.createTask = async (req, res) => {
  try {
    const newTask = new Task({
      user: req.user._id,
      projectId: req.body.projectId,
      title: req.body.title,
      description: req.body.description,
      assignedTo: req.body.assignedTo,
      priority: req.body.priority,
      status: req.body.status,
      deadline: req.body.deadline,
      createdAt: new Date(),
      timeLogged: [],
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
      { ...req.body },
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

// Get tasks by project
exports.getTasksByProject = async (req, res) => {
  try {
    const tasks = await Task.find({ projectId: req.params.projectId });
    res.status(200).json(tasks);
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
    const filters = req.query;
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
      { $addToSet: { assignedTo: req.body.userId } },
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
    const { timeLogged, userId } = req.body;
    const task = await Task.findByIdAndUpdate(
      req.params.taskId,
      { $push: { timeLogged: { hours: timeLogged, user: userId } } },
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
