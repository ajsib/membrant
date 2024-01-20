const express = require("express");
const router = express.Router();
const projectControllers = require("../controllers/projectControllers");
const authenticate = require("../middleware/authenticate");

// Create a new project
router.post("/", authenticate, projectControllers.createProject);
// Retrieve a project by ID
router.get("/:projectId", authenticate, projectControllers.getProjectById);
// Update a project
router.patch("/:projectId", authenticate, projectControllers.updateProject);
// Delete a project
router.delete("/:projectId", authenticate, projectControllers.deleteProject);
// List all projects
router.get("/", authenticate, projectControllers.listProjects);
// add members to project
router.patch(
  "/:projectId/members",
  authenticate,
  projectControllers.addMemberToProject
);
// remove members from project
router.patch(
  "/:projectId/members/remove",
  authenticate,
  projectControllers.removeMemberFromProject
);

module.exports = router;
