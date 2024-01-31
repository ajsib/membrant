import React from "react";
import { useNavigate } from "react-router-dom";
import Arrow from "../../assets/arrow.svg";
import "./main.css";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="mainpage">
      <div className="header">
        <div className="header__text">
          <h1>Membrant</h1>
          <h2>
            "For every minute spent organizing, <br /> an hour is earned"-
            Anonymous.
          </h2>
        </div>
        <div className="header__buttons">
          <button className="signup-button" onClick={() => navigate("/signup")}>
            <p>Get Started</p> <img src={Arrow} />
          </button>
          <button className="login-button" onClick={() => navigate("/login")}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
