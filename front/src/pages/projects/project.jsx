import React, { useEffect, useState } from "react";
import config from "../../../config";
import Task from "../../components/task/task";

const Project = ({ projectId }) => {
  const [project, setProject] = useState({});
  const [editTitle, setEditTitle] = useState(false);
  const [editDescription, setEditDescription] = useState(false);
  const [tasks, setTasks] = useState([]);

  // fetch project
  const fetchProject = () => {
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
  };

  // fetch tasks
  const fetchTasks = () => {
    // get the tasks for this project
    fetch(`${config.apiBaseUrl}/api/tasks/projects/${projectId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setTasks(data);
      });
  };

  useEffect(() => {
    fetchProject();
    fetchTasks();
  }, []);

  // Project editing
  const onTitleClick = () => {
    setEditTitle(true);
  };

  const onTitleBlur = () => {
    setEditTitle(false);
    fetch(`${config.apiBaseUrl}/api/projects/${projectId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({
        title: project.title,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  const onDescriptionClick = () => {
    setEditDescription(true);
  };

  const onDescriptionBlur = () => {
    setEditDescription(false);
    fetch(`${config.apiBaseUrl}/api/projects/${projectId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({
        description: project.description,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  // Add a new task
  const addTask = () => {
    const newTask = {
      projectId: projectId,
      title: "New Task",
      description: "New Task Description",
      assignedTo: localStorage.getItem("userId"),
      priority: "Low",
      status: "In Progress",
      deadline: new Date().toISOString(),
      createdAt: new Date().toISOString(),
      timeLogged: [],
    };
    fetch(`${config.apiBaseUrl}/api/tasks`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(newTask),
    })
      .then((res) => res.json())
      .then((data) => {
        setTasks([...tasks, data]);
        console.log(data);
      });
  };

  return (
    <div>
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
      <div>
        <h3>Tasks</h3>
        {/* Table of tasks */}
        <table>
          <thead>
            <tr>
              <th>Task</th>
              <th>Assigned To</th>
              <th>Status</th>
              <th>Deadline</th>
            </tr>
          </thead>
          <tbody>
            {tasks &&
              tasks.map((task) => {
                return <Task key={task._id} task={task} showProject={false} />;
              })}
            <tr>
              <td>
                <button onClick={addTask}>Add Task</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Project;
