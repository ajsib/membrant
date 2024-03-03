import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div>
        <div>
          <h1>Membrant</h1>
          <h2>
            "For every minute spent organizing, <br /> an hour is earned"-
            Anonymous.
          </h2>
        </div>
        <div>
          <button onClick={() => navigate("/signup")}>Get Started</button>
          <button onClick={() => navigate("/login")}>Login</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
