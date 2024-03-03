import React, { useEffect, useState } from "react";
import config from "../../../config";

const Project = ({ projectId }) => {
  const [project, setProject] = useState({});
  const [editTitle, setEditTitle] = useState(false);
  const [editDescription, setEditDescription] = useState(false);

  useEffect(() => {
    // get the project info
    fetch(`${config.apiBaseUrl}/api/projects/${projectId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setProject(data);
      });
  }, []);

  // Project editing
  const onTitleClick = () => {
    setEditTitle(true);
  };

  const onTitleBlur = () => {
    setEditTitle(false);
  };

  const onDescriptionClick = () => {
    setEditDescription(true);
  };

  const onDescriptionBlur = () => {
    setEditDescription(false);
  };

  return (
    <div>
      {editTitle ? (
        <input
          placeholder={project.title}
          onChange={(e) => setProject({ ...project, title: e.target.value })}
          onBlur={onTitleBlur}
        />
      ) : (
        <h1 onClick={onTitleClick}>{project.title}</h1>
      )}
      {editDescription ? (
        <input
          placeholder={project.description}
          onChange={(e) =>
            setProject({ ...project, description: e.target.value })
          }
          onBlur={onDescriptionBlur}
        />
      ) : (
        <h2 onClick={onDescriptionClick}>{project.description}</h2>
      )}
    </div>
  );
};

export default Project;
