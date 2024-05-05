import React, { useState, useEffect } from "react";
import config from "../../../config";

interface TaskProps {
  task: {
    _id: string;
    title: string;
    status: string;
    deadline: string;
    assignedTo: string;
    projectId: string;
  };
  showProject: boolean;
}

const Task: React.FC<TaskProps> = ({ task, showProject }) => {
  const [user, setUser] = useState<string>("");
  const [project, setProject] = useState<string>("");
  const [editMode, setEditMode] = useState<boolean>(false);
  const [newTitle, setNewTitle] = useState<string>(task.title);
  const [newStatus, setNewStatus] = useState<string>(task.status);
  const [newDeadline, setNewDeadline] = useState<string>(task.deadline);
  const [reload, setReload] = useState<boolean>(false); // State to trigger reload

  useEffect(() => {
    const getUser = async (userId: string) => {
      try {
        const response = await fetch(
          `${config.apiBaseUrl}/api/users/${userId}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
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

    const getProject = async (projectId: string) => {
      try {
        const response = await fetch(
          `${config.apiBaseUrl}/api/projects/${projectId}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
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
  }, [task.assignedTo, reload]); // Add reload to the dependency array

  const editTask = async (taskId: string, title: string, status: string, deadline: string) => {
    try {
      const response = await fetch(`${config.apiBaseUrl}/api/tasks/${taskId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({
          title: title,
          status: status,
          deadline: deadline,
        }),
      });
      const data = await response.json();
      console.log(data);
      // Set reload to true to force a re-render
      setReload(!reload);
    } catch (error) {
      console.error("Error editing task:", error);
    }
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTitle(e.target.value);
  };

  const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setNewStatus(e.target.value);
  };

  const handleDeadlineChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewDeadline(e.target.value);
  };

  const handleEditClick = () => {
    setEditMode(true);
  };

  const handleSaveClick = () => {
    editTask(task._id, newTitle, newStatus, newDeadline);
    setEditMode(false);
  };

  const handleBlur = () => {
    editTask(task._id, newTitle, newStatus, newDeadline);
    setEditMode(false);
  };

  return (
    <>
      <tr>
        <td onClick={handleEditClick}>
          {editMode ? (
            <input
              type="text"
              value={newTitle}
              onChange={handleTitleChange}
              onBlur={handleBlur}
            />
          ) : (
            task.title
          )}
        </td>
        <td>{user}</td>
        <td>
          {editMode ? (
            <select
              value={newStatus}
              onChange={handleStatusChange}
              onBlur={handleBlur}
            >
              <option value="Not Started">Not Started</option>
              <option value="In Progress">In Progress</option>
              <option value="Completed">Completed</option>
            </select>
          ) : (
            task.status
          )}
        </td>
        <td>
          {editMode ? (
            <input
              type="date"
              value={newDeadline}
              onChange={handleDeadlineChange}
              onBlur={handleBlur}
            />
          ) : (
            task.deadline
          )}
        </td>
        {showProject && <td>{project}</td>}
        {editMode && (
          <td>
            <button onClick={handleSaveClick}>Save</button>
          </td>
        )}
      </tr>
    </>
  );
};

export default Task;
