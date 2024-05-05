var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
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
import ProjectSlider from "./project";
import NavBar from "../../components/navbar/navbar";
import Card from "../../UI/Card";
var projectsStyle = css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 80%;\n  margin-left: 110px;\n  @media (max-width: 768px) {\n    width: 100%;\n    margin-left: 0;\n  }\n"], ["\n  width: 80%;\n  margin-left: 110px;\n  @media (max-width: 768px) {\n    width: 100%;\n    margin-left: 0;\n  }\n"])));
var Projects = function () {
    var _a = useState([]), projects = _a[0], setProjects = _a[1];
    var _b = useState(false), openProject = _b[0], setOpenProject = _b[1];
    var _c = useState(null), selectedProject = _c[0], setSelectedProject = _c[1];
    useEffect(function () {
        document.title = "Projects";
        // Get all projects for this user
        fetch("".concat(config.apiBaseUrl, "/api/projects/user/").concat(localStorage.getItem("userId")), {
            method: "GET",
            headers: {
                "Content-Type": "application",
                Authorization: "Bearer ".concat(localStorage.getItem("token")),
            },
        })
            .then(function (res) { return res.json(); })
            .then(function (data) {
            setProjects(data);
        });
    }, []);
    // Add a new Project
    var addProject = function () {
        fetch("".concat(config.apiBaseUrl, "/api/projects"), {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer ".concat(localStorage.getItem("token")),
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
            .then(function (res) { return res.json(); })
            .then(function (data) {
            setProjects(__spreadArray(__spreadArray([], projects, true), [data], false));
        });
    };
    // Open Project Details
    var openProjectDetails = function (project) {
        setOpenProject(true);
        setSelectedProject(project._id);
    };
    return (_jsxs("div", { children: [_jsx(NavBar, {}), _jsxs("div", { css: projectsStyle, children: [_jsx("h1", { children: "My Projects" }), _jsx("button", { onClick: addProject, children: "Add Project" }), projects.map(function (project) {
                        return (_jsxs(Card, { onClick: function () { return openProjectDetails(project); }, children: [_jsx("h3", { children: project.title }), _jsx("p", { children: project.description })] }, project._id));
                    }), _jsx("div", { children: openProject && (_jsx("div", { children: _jsx(ProjectSlider, { projectId: selectedProject, openProject: openProject, closeProject: function () { return setOpenProject(false); } }) })) })] })] }));
};
export default Projects;
var templateObject_1;
