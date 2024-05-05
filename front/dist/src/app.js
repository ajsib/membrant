import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/main/main.js";
import SignUp from "./pages/signup/signup";
import Login from "./pages/login/login";
import Dash from "./pages/dashboard/dash";
import Projects from "./pages/projects/projects";
import "./assets/globals.css";
export default function App() {
    return (_jsx(BrowserRouter, { children: _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(Home, {}) }), _jsx(Route, { path: "/signup", element: _jsx(SignUp, {}) }), _jsx(Route, { path: "/login", element: _jsx(Login, {}) }), _jsx(Route, { path: "/dashboard", element: _jsx(Dash, {}) }), _jsx(Route, { path: "/projects", element: _jsx(Projects, {}) })] }) }));
}
