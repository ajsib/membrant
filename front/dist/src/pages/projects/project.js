var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { jsx as _jsx, jsxs as _jsxs } from "@emotion/react/jsx-runtime";
/** @jsxImportSource @emotion/react */
import { useEffect, useState } from "react";
import config from "../../../config";
import { css } from "@emotion/react";
import Task from "../../components/task/task";
var projectStyle = css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  margin-left: 110px;\n  position: relative;\n  z-index: 1;\n  width: 80%;\n  @media (max-width: 768px) {\n    width: 100%;\n    margin-left: 0;\n  }\n"], ["\n  margin-left: 110px;\n  position: relative;\n  z-index: 1;\n  width: 80%;\n  @media (max-width: 768px) {\n    width: 100%;\n    margin-left: 0;\n  }\n"])));
var inputStyle = css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  width: 100%;\n  padding: 1vw;\n  font-size: 1.5vw;\n  margin-bottom: 1vw;\n"], ["\n  width: 100%;\n  padding: 1vw;\n  font-size: 1.5vw;\n  margin-bottom: 1vw;\n"])));
var tableStyle = css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  width: 100%;\n  border-collapse: collapse;\n  border-radius: 1vw;\n  overflow: hidden;\n  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.1);\n  margin-top: 2vw;\n  th,\n  td {\n    padding: 1.5vw;\n    text-align: left;\n    font-size: 1.5vw;\n    border-bottom: 1px solid #dddddd;\n  }\n  th {\n    background-color: #f0f0f0;\n  }\n  td:last-child {\n    text-align: center;\n  }\n  button {\n    padding: 1vw 1.5vw;\n    background-color: #4caf50;\n    color: white;\n    border: none;\n    border-radius: 0.5vw;\n    cursor: pointer;\n    font-size: 1.5vw;\n    transition: background-color 0.3s ease;\n  }\n  button:hover {\n    background-color: #45a049;\n  }\n"], ["\n  width: 100%;\n  border-collapse: collapse;\n  border-radius: 1vw;\n  overflow: hidden;\n  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.1);\n  margin-top: 2vw;\n  th,\n  td {\n    padding: 1.5vw;\n    text-align: left;\n    font-size: 1.5vw;\n    border-bottom: 1px solid #dddddd;\n  }\n  th {\n    background-color: #f0f0f0;\n  }\n  td:last-child {\n    text-align: center;\n  }\n  button {\n    padding: 1vw 1.5vw;\n    background-color: #4caf50;\n    color: white;\n    border: none;\n    border-radius: 0.5vw;\n    cursor: pointer;\n    font-size: 1.5vw;\n    transition: background-color 0.3s ease;\n  }\n  button:hover {\n    background-color: #45a049;\n  }\n"])));
var rightSideStyle = css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  position: fixed;\n  top: 0;\n  right: 0;\n  width: 50%;\n  height: 100%;\n  background-color: #ffffff;\n  z-index: 2;\n  transition: transform 0.3s ease-out;\n  transform: translateX(100%);\n  box-shadow: -1vw 0 3vw rgba(0, 0, 0, 0.2);\n  padding: 2vw;\n"], ["\n  position: fixed;\n  top: 0;\n  right: 0;\n  width: 50%;\n  height: 100%;\n  background-color: #ffffff;\n  z-index: 2;\n  transition: transform 0.3s ease-out;\n  transform: translateX(100%);\n  box-shadow: -1vw 0 3vw rgba(0, 0, 0, 0.2);\n  padding: 2vw;\n"])));
var rightSideOpen = css(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  transform: translateX(0%);\n"], ["\n  transform: translateX(0%);\n"])));
var closeButtonStyle = css(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  position: absolute;\n  top: 1vw;\n  right: 1vw;\n  background-color: #ffffff;\n  color: #000000;\n  border: none;\n  font-size: 1.5vw;\n  cursor: pointer;\n"], ["\n  position: absolute;\n  top: 1vw;\n  right: 1vw;\n  background-color: #ffffff;\n  color: #000000;\n  border: none;\n  font-size: 1.5vw;\n  cursor: pointer;\n"])));
var ProjectSlider = function (_a) {
    var projectId = _a.projectId, closeProject = _a.closeProject, openProject = _a.openProject;
    var _b = useState({}), project = _b[0], setProject = _b[1];
    var _c = useState(false), editTitle = _c[0], setEditTitle = _c[1];
    var _d = useState(false), editDescription = _d[0], setEditDescription = _d[1];
    var _e = useState([]), tasks = _e[0], setTasks = _e[1];
    // fetch project
    var fetchProject = function () {
        // get the project info
        fetch("".concat(config.apiBaseUrl, "/api/projects/").concat(projectId), {
            method: "GET",
            headers: {
                "Content-Type": "application",
                Authorization: "Bearer ".concat(localStorage.getItem("token")),
            },
        })
            .then(function (res) { return res.json(); })
            .then(function (data) {
            setProject(data);
        });
    };
    // fetch tasks
    var fetchTasks = function () {
        // get the tasks for this project
        fetch("".concat(config.apiBaseUrl, "/api/tasks/projects/").concat(projectId), {
            method: "GET",
            headers: {
                "Content-Type": "application",
                Authorization: "Bearer ".concat(localStorage.getItem("token")),
            },
        })
            .then(function (res) { return res.json(); })
            .then(function (data) {
            console.log(data);
            setTasks(data);
        });
    };
    useEffect(function () {
        fetchProject();
        fetchTasks();
    }, []);
    // Project editing
    var onTitleClick = function () {
        setEditTitle(true);
    };
    var onTitleBlur = function () {
        setEditTitle(false);
        fetch("".concat(config.apiBaseUrl, "/api/projects/").concat(projectId), {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer ".concat(localStorage.getItem("token")),
            },
            body: JSON.stringify({
                title: project.title,
            }),
        })
            .then(function (res) { return res.json(); })
            .then(function (data) {
            console.log(data);
        });
    };
    var onDescriptionClick = function () {
        setEditDescription(true);
    };
    var onDescriptionBlur = function () {
        setEditDescription(false);
        fetch("".concat(config.apiBaseUrl, "/api/projects/").concat(projectId), {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer ".concat(localStorage.getItem("token")),
            },
            body: JSON.stringify({
                description: project.description,
            }),
        })
            .then(function (res) { return res.json(); })
            .then(function (data) {
            console.log(data);
        });
    };
    // Add a new task
    var addTask = function () {
        var newTask = {
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
        fetch("".concat(config.apiBaseUrl, "/api/tasks"), {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer ".concat(localStorage.getItem("token")),
            },
            body: JSON.stringify(newTask),
        })
            .then(function (res) { return res.json(); })
            .then(function (data) {
            setTasks(__spreadArray(__spreadArray([], tasks, true), [data], false));
            console.log(data);
        });
    };
    return (_jsxs("div", { css: [rightSideStyle, openProject && rightSideOpen], children: [_jsx("button", { css: closeButtonStyle, onClick: closeProject, children: "Close" }), _jsxs("div", { css: projectStyle, children: [_jsxs("div", { children: [editTitle ? (_jsx("input", { css: inputStyle, placeholder: project.title, onChange: function (e) {
                                    return setProject(__assign(__assign({}, project), { title: e.target.value }));
                                }, onBlur: onTitleBlur })) : (_jsx("h1", { onClick: onTitleClick, children: project.title })), editDescription ? (_jsx("input", { css: inputStyle, placeholder: project.description, onChange: function (e) {
                                    return setProject(__assign(__assign({}, project), { description: e.target.value }));
                                }, onBlur: onDescriptionBlur })) : (_jsx("h2", { onClick: onDescriptionClick, children: project.description }))] }), _jsxs("div", { children: [_jsx("h3", { children: "Tasks" }), _jsxs("table", { css: tableStyle, children: [_jsx("thead", { children: _jsxs("tr", { children: [_jsx("th", { children: "Task" }), _jsx("th", { children: "Assigned To" }), _jsx("th", { children: "Status" }), _jsx("th", { children: "Deadline" })] }) }), _jsxs("tbody", { children: [tasks &&
                                                tasks.map(function (task) {
                                                    return (_jsx(Task, { task: task, showProject: false }, task._id));
                                                }), _jsx("tr", { children: _jsx("td", { colSpan: "4", style: { textAlign: "center" }, children: _jsx("button", { onClick: addTask, children: "Add Task" }) }) })] })] })] })] })] }));
};
export default ProjectSlider;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;
