import React, { useState, useEffect } from "react";
import config from "../../../config";

const Task = ({ task, showProject }) => {
  const [user, setUser] = useState("");
  const [project, setProject] = useState("");

  useEffect(() => {
    const getUser = async (userId) => {
      try {
        const response = await fetch(
          `${config.apiBaseUrl}/api/users/${userId}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application",
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );

        const data = await response.json();
        setUser(data.name);
      } catch (error) {
        console.error("Error fetching user:", error);
        return null;
      }
    };

    const getProject = async (projectId) => {
      try {
        const response = await fetch(
          `${config.apiBaseUrl}/api/projects/${projectId}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application",
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );

        const data = await response.json();
        setProject(data.title);
      } catch (error) {
        console.error("Error fetching project:", error);
        return null;
      }
    };
    if (!showProject) getUser(task.assignedTo);
    if (showProject) getProject(task.projectId);
  }, [task.assignedTo]);

  return (
    <>
      <tr>
        <td>{task.title}</td>
        <td>{user}</td>
        <td>{task.status}</td>
        <td>{task.deadline}</td>
        {showProject && <td>{project}</td>}
      </tr>
    </>
  );
};

export default Task;
