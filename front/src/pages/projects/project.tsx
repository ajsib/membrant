/** @jsxImportSource @emotion/react */
import { useEffect, useState } from "react";
import config from "../../../config";
import { css } from "@emotion/react";
import Task from "../../components/task/task";

interface Project {
  title: string;
  description: string;
}

interface Task {
  _id: string;
  projectId: string;
  title: string;
  description: string;
  assignedTo: string;
  priority: string;
  status: string;
  deadline: string;
  createdAt: string;
  timeLogged: any[]; // Update with appropriate type
}

interface Props {
  projectId: string;
  closeProject: () => void;
  openProject: boolean;
}

const projectStyle = css`
  margin-left: 110px;
  position: relative;
  z-index: 1;
  width: 80%;
  @media (max-width: 768px) {
    width: 100%;
    margin-left: 0;
  }
`;

const inputStyle = css`
  width: 100%;
  padding: 1vw;
  font-size: 1.5vw;
  margin-bottom: 1vw;
`;

const tableStyle = css`
  width: 100%;
  border-collapse: collapse;
  border-radius: 1vw;
  overflow: hidden;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.1);
  margin-top: 2vw;
  th,
  td {
    padding: 1.5vw;
    text-align: left;
    font-size: 1.5vw;
    border-bottom: 1px solid #dddddd;
  }
  th {
    background-color: #f0f0f0;
  }
  td:last-child {
    text-align: center;
  }
  button {
    padding: 1vw 1.5vw;
    background-color: #4caf50;
    color: white;
    border: none;
    border-radius: 0.5vw;
    cursor: pointer;
    font-size: 1.5vw;
    transition: background-color 0.3s ease;
  }
  button:hover {
    background-color: #45a049;
  }
`;

const rightSideStyle = css`
  position: fixed;
  top: 0;
  right: 0;
  width: 50%;
  height: 100%;
  background-color: #ffffff;
  z-index: 2;
  transition: transform 0.3s ease-out;
  transform: translateX(100%);
  box-shadow: -1vw 0 3vw rgba(0, 0, 0, 0.2);
  padding: 2vw;
`;

const rightSideOpen = css`
  transform: translateX(0%);
`;

const closeButtonStyle = css`
  position: absolute;
  top: 1vw;
  right: 1vw;
  background-color: #ffffff;
  color: #000000;
  border: none;
  font-size: 1.5vw;
  cursor: pointer;
`;

const ProjectSlider: React.FC<Props> = ({ projectId, closeProject, openProject }) => {
  const [project, setProject] = useState<Project>({ title: "", description: "" });
  const [editTitle, setEditTitle] = useState(false);
  const [editDescription, setEditDescription] = useState(false);
  const [tasks, setTasks] = useState<Task[]>([]);

  // Fetch project
  const fetchProject = () => {
    fetch(`${config.apiBaseUrl}/api/projects/${projectId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data: Project) => {
        setProject(data);
      });
  };

  // Fetch tasks
  const fetchTasks = () => {
    fetch(`${config.apiBaseUrl}/api/tasks/projects/${projectId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data: Task[]) => {
        setTasks(data);
      });
  };

  useEffect(() => {
    fetchProject();
    fetchTasks();
  }, [projectId]);

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
    <div css={[rightSideStyle, openProject && rightSideOpen]}>
      <button css={closeButtonStyle} onClick={closeProject}>
        Close
      </button>
      <div css={projectStyle}>
        <div>
          {editTitle ? (
            <input
              css={inputStyle}
              placeholder={project.title}
              onChange={(e) =>
                setProject({ ...project, title: e.target.value })
              }
              onBlur={onTitleBlur}
            />
          ) : (
            <h1 onClick={onTitleClick}>{project.title}</h1>
          )}
          {editDescription ? (
            <input
              css={inputStyle}
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
          <table css={tableStyle}>
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
                  return (
                    <Task key={task._id} task={task} showProject={false} />
                  );
                })}
              <tr>
                <td style={{ textAlign: "center", verticalAlign: "middle" }}>
                  <button onClick={addTask}>Add Task</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProjectSlider;
