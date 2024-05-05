var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import config from "../../../config";
var Task = function (_a) {
    var task = _a.task, showProject = _a.showProject;
    var _b = useState(""), user = _b[0], setUser = _b[1];
    var _c = useState(""), project = _c[0], setProject = _c[1];
    var _d = useState(false), editMode = _d[0], setEditMode = _d[1];
    var _e = useState(task.title), newTitle = _e[0], setNewTitle = _e[1];
    var _f = useState(task.status), newStatus = _f[0], setNewStatus = _f[1];
    var _g = useState(task.deadline), newDeadline = _g[0], setNewDeadline = _g[1];
    var _h = useState(false), reload = _h[0], setReload = _h[1]; // State to trigger reload
    useEffect(function () {
        var getUser = function (userId) { return __awaiter(void 0, void 0, void 0, function () {
            var response, data, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, fetch("".concat(config.apiBaseUrl, "/api/users/").concat(userId), {
                                method: "GET",
                                headers: {
                                    "Content-Type": "application",
                                    Authorization: "Bearer ".concat(localStorage.getItem("token")),
                                },
                            })];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.json()];
                    case 2:
                        data = _a.sent();
                        setUser(data.name);
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _a.sent();
                        console.error("Error fetching user:", error_1);
                        return [2 /*return*/, null];
                    case 4: return [2 /*return*/];
                }
            });
        }); };
        var getProject = function (projectId) { return __awaiter(void 0, void 0, void 0, function () {
            var response, data, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, fetch("".concat(config.apiBaseUrl, "/api/projects/").concat(projectId), {
                                method: "GET",
                                headers: {
                                    "Content-Type": "application",
                                    Authorization: "Bearer ".concat(localStorage.getItem("token")),
                                },
                            })];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.json()];
                    case 2:
                        data = _a.sent();
                        setProject(data.title);
                        return [3 /*break*/, 4];
                    case 3:
                        error_2 = _a.sent();
                        console.error("Error fetching project:", error_2);
                        return [2 /*return*/, null];
                    case 4: return [2 /*return*/];
                }
            });
        }); };
        if (!showProject)
            getUser(task.assignedTo);
        if (showProject)
            getProject(task.projectId);
    }, [task.assignedTo, reload]); // Add reload to the dependency array
    var editTask = function (taskId, title, status, deadline) { return __awaiter(void 0, void 0, void 0, function () {
        var response, data, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch("".concat(config.apiBaseUrl, "/api/tasks/").concat(taskId), {
                            method: "PATCH",
                            headers: {
                                "Content-Type": "application/json",
                                Authorization: "Bearer ".concat(localStorage.getItem("token")),
                            },
                            body: JSON.stringify({
                                title: title,
                                status: status,
                                deadline: deadline,
                            }),
                        })];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    console.log(data);
                    // Set reload to true to force a re-render
                    setReload(!reload);
                    return [3 /*break*/, 4];
                case 3:
                    error_3 = _a.sent();
                    console.error("Error editing task:", error_3);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var handleTitleChange = function (e) {
        setNewTitle(e.target.value);
    };
    var handleStatusChange = function (e) {
        setNewStatus(e.target.value);
    };
    var handleDeadlineChange = function (e) {
        setNewDeadline(e.target.value);
    };
    var handleEditClick = function () {
        setEditMode(true);
    };
    var handleSaveClick = function () {
        editTask(task._id, newTitle, newStatus, newDeadline);
        setEditMode(false);
    };
    var handleBlur = function () {
        editTask(task._id, newTitle, newStatus, newDeadline);
        setEditMode(false);
    };
    return (_jsx(_Fragment, { children: _jsxs("tr", { children: [_jsx("td", { onClick: handleEditClick, children: editMode ? (_jsx("input", { type: "text", value: newTitle, onChange: handleTitleChange, onBlur: handleBlur })) : (task.title) }), _jsx("td", { children: user }), _jsx("td", { children: editMode ? (_jsxs("select", { value: newStatus, onChange: handleStatusChange, onBlur: handleBlur, children: [_jsx("option", { value: "Not Started", children: "Not Started" }), _jsx("option", { value: "In Progress", children: "In Progress" }), _jsx("option", { value: "Completed", children: "Completed" })] })) : (task.status) }), _jsx("td", { children: editMode ? (_jsx("input", { type: "date", value: newDeadline, onChange: handleDeadlineChange, onBlur: handleBlur })) : (task.deadline) }), showProject && _jsx("td", { children: project }), editMode && (_jsx("td", { children: _jsx("button", { onClick: handleSaveClick, children: "Save" }) }))] }) }));
};
export default Task;
