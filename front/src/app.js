import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/main/main.js";
import SignUp from "./pages/signup/signup.jsx";
import Login from "./pages/login/login.jsx";
import Dash from "./pages/dashboard/dash.jsx";
import Projects from "./pages/projects/projects.jsx";
import "./assets/globals.css";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dash />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </BrowserRouter>
  );
}
