const express = require("express");
const router = express.Router();
const projectControllers = require("../controllers/projectControllers");
const authenticate = require("../middlewares/authenticate");

// Create a new project
router.post("/", authenticate, projectControllers.createProject);
router.get("/:projectId", authenticate, projectControllers.getProjectById);
router.patch("/:projectId", authenticate, projectControllers.updateProject);
router.delete("/:projectId", authenticate, projectControllers.deleteProject);
router.get("/", authenticate, projectControllers.listProjects);
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
