import React, { useEffect, useState } from "react";
import config from "../../../config";
import Project from "./project";
import NavBar from "../../components/navbar/navbar";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [openProject, setOpenProject] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    document.title = "Projects";
    // Get all projects for this user
    fetch(
      `${config.apiBaseUrl}/api/projects/user/${localStorage.getItem(
        "userId"
      )}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
      });
  }, []);

  // Add a new Project
  const addProject = () => {
    fetch(`${config.apiBaseUrl}/api/projects`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({
        title: "New Project",
        description: "New Project Description",
        createdBy: localStorage.getItem("userId"),
        members: [localStorage.getItem("userId")],
        status: "In Progress",
        deadline: new Date().toISOString(), // Adjusted date format
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setProjects([...projects, data]);
      });
  };

  // Open Project Details
  const openProjectDetails = (project) => {
    setOpenProject(true);
    setSelectedProject(project._id);
  };

  return (
    <div>
      <NavBar />
      <div
        style={{
          marginLeft: "110px",
        }}
      >
        <h1>My Projects</h1>
        <button onClick={addProject}>Add Project</button>
        {projects.map((project) => {
          return (
            <div key={project._id} onClick={() => openProjectDetails(project)}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          );
        })}
        <div
          style={{
            position: "fixed",
            top: "100px",
            right: "100px",
          }}
        >
          {openProject && (
            <div>
              <button
                onClick={() => {
                  setOpenProject(false);
                  setSelectedProject(null);
                }}
              >
                Close
              </button>
              <Project projectId={selectedProject} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;
