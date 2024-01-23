const express = require("express");
const router = express.Router();
const projectControllers = require("../controllers/projectControllers");
const authenticate = require("../middlewares/authenticate");

// Create a new project
router.post("/", authenticate, projectControllers.createProject);
// get project by id
router.get("/:projectId", authenticate, projectControllers.getProjectById);
// update project
router.patch("/:projectId", authenticate, projectControllers.updateProject);
// delete project
router.delete("/:projectId", authenticate, projectControllers.deleteProject);
// list projects
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
