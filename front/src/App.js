import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/main/index.js";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
