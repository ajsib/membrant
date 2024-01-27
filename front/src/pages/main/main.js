import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="mainpage">
      <h1>Membrant</h1>
      <h2>
        "For every minute spent organizing, and hour is earned"- Anonymous.
      </h2>
      <button onClick={() => navigate("/signup")}>Get Started</button>
      <button onClick={() => navigate("/login")}>Login</button>
    </div>
  );
};

export default Home;
