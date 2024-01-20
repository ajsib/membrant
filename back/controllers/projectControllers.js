const Project = require("../models/Project");

// Create a new project
exports.createProject = async (req, res) => {
  try {
    const {
      title,
      description,
      createdBy,
      members,
      status,
      deadline,
      sharedWith,
    } = req.body;
    const newProject = await Project.create({
      title,
      description,
      createdBy,
      members,
      status,
      deadline,
      sharedWith,
    });
    res.status(201).json(newProject);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Retrieve a project by ID
exports.getProjectById = async (req, res) => {
  try {
    const project = await Project.findById(req.params.projectId);
    if (!project) {
      return res.status(404).json({ error: "Project not found" });
    }
    res.status(200).json(project);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Update a project
exports.updateProject = async (req, res) => {
  try {
    const updatedProject = await Project.findByIdAndUpdate(
      req.params.projectId,
      req.body,
      { new: true }
    );
    if (!updatedProject) {
      return res.status(404).json({ error: "Project not found" });
    }
    res.status(200).json(updatedProject);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete a project
exports.deleteProject = async (req, res) => {
  try {
    const project = await Project.findByIdAndDelete(req.params.projectId);
    if (!project) {
      return res.status(404).json({ error: "Project not found" });
    }
    res.status(204).send(); // 204 No Content
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// List all projects
exports.listProjects = async (req, res) => {
  try {
    const projects = await Project.find({});
    res.status(200).json(projects);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Add a member to a project
exports.addMemberToProject = async (req, res) => {
  try {
    const project = await Project.findById(req.params.projectId);
    if (!project) {
      return res.status(404).json({ error: "Project not found" });
    }
    project.members.push(req.body.userId);
    await project.save();
    res.status(200).json(project);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Remove a member from a project
exports.removeMemberFromProject = async (req, res) => {
  try {
    const project = await Project.findById(req.params.projectId);
    if (!project) {
      return res.status(404).json({ error: "Project not found" });
    }
    project.members = project.members.filter(
      (member) => member !== req.body.userId
    );
    await project.save();
    res.status(200).json(project);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
