const express = require("express");
const router = express.Router();
const taskControllers = require("../controllers/taskControllers");
const authenticate = require("../middleware/authenticate");

// Create a new task
router.post("/", authenticate, taskControllers.createTask);
// Retrieve a task by ID
router.get("/:taskId", authenticate, taskControllers.getTaskById);
// Update a task
router.patch("/:taskId", authenticate, taskControllers.updateTask);
// Delete a task
router.delete("/:taskId", authenticate, taskControllers.deleteTask);
// List all tasks
router.get("/", authenticate, taskControllers.listTasks);
// Assign a task to a user
router.patch("/:taskId/assign", authenticate, taskControllers.assignTask);
// log time for a task
router.patch("/:taskId/logtime", authenticate, taskControllers.logTaskTime);

module.exports = router;
