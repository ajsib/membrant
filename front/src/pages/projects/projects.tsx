/** @jsxImportSource @emotion/react */
import { useEffect, useState } from "react";
import config from "../../../config";
import { css } from "@emotion/react";
import ProjectSlider from "./project";
import NavBar from "../../components/Shared/navbar/navbar";
import Card from "../../UI/Card";

interface Project {
  _id: string;
  title: string;
  description: string;
}

const projectsStyle = css`
  width: 80%;
  margin-left: 110px;
  @media (max-width: 768px) {
    width: 100%;
    margin-left: 0;
  }
`;

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [openProject, setOpenProject] = useState<boolean>(false);
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

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
          "Content-Type": "application/json", // Fixed content type
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data: Project[]) => {
        setProjects(data);
      });
  }, []);

  // Add a new Project
  const addProject = () => {
    fetch(`${config.apiBaseUrl}/api/projects`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // Fixed content type
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
      .then((data: Project) => {
        setProjects([...projects, data]);
      });
  };

  // Open Project Details
  const openProjectDetails = (project: Project) => {
    setOpenProject(true);
    setSelectedProject(project._id);
  };

  return (
    <div>
      <NavBar />
      <div css={projectsStyle}>
        <h1>My Projects</h1>
        <button onClick={addProject}>Add Project</button>
        {projects.map((project) => {
          return (
            <Card key={project._id} onClick={() => openProjectDetails(project)}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </Card>
          );
        })}
        <div>
          {openProject && (
            <div>
              <ProjectSlider
                projectId={selectedProject || ""}
                openProject={openProject}
                closeProject={() => setOpenProject(false)}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;
