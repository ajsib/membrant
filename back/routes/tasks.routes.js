const express = require("express");
const router = express.Router();
const taskControllers = require("../controllers/taskControllers");
const authenticate = require("../middleware/authenticate");

// Create a new task
router.post("/", taskControllers.createTask);
// Retrieve a task by ID
router.get("/:taskId", taskControllers.getTaskById);
// Update a task
router.patch("/:taskId", taskControllers.updateTask);
// Delete a task
router.delete("/:taskId", taskControllers.deleteTask);
// List all tasks
router.get("/", taskControllers.listTasks);
// Assign a task to a user
router.patch("/:taskId/assign", taskControllers.assignTask);
// log time for a task
router.patch("/:taskId/logtime", taskControllers.logTaskTime);

module.exports = router;
