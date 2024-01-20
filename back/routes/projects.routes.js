const express = require("express");
const router = express.Router();
const projectControllers = require("../controllers/projectControllers");
const authenticate = require("../middleware/authenticate");

// Create a new project
router.post("/", projectControllers.createProject);
// Retrieve a project by ID
router.get("/:projectId", projectControllers.getProjectById);
// Update a project
router.patch("/:projectId", projectControllers.updateProject);
// Delete a project
router.delete("/:projectId", projectControllers.deleteProject);
// List all projects
router.get("/", projectControllers.listProjects);
// add members to project
router.patch("/:projectId/members", projectControllers.addMemberToProject);
// remove members from project
router.patch(
  "/:projectId/members/remove",
  projectControllers.removeMemberFromProject
);

module.exports = router;
