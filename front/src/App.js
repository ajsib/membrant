import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/main/main.js";
import SignUp from "./pages/signup/signup.jsx";
import Login from "./pages/login/login.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
