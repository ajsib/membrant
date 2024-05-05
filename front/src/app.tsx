import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/main/main";
import SignUp from "./pages/signup/signup";
import Login from "./pages/login/login";
import Dash from "./pages/dashboard/dash";
import Projects from "./pages/projects/projects";
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
