const express = require("express");
const router = express.Router();
const taskControllers = require("../controllers/taskControllers");
const authenticate = require("../middleware/authenticate");

// Task routes
router.post("/", authenticate, taskControllers.createTask);
router.get("/:taskId", authenticate, taskControllers.getTaskById);
router.patch("/:taskId", authenticate, taskControllers.updateTask);
router.delete("/:taskId", authenticate, taskControllers.deleteTask);
router.get("/", authenticate, taskControllers.listTasks);
router.patch("/:taskId/assign", authenticate, taskControllers.assignTask);
router.patch("/:taskId/logtime", authenticate, taskControllers.logTaskTime);

module.exports = router;
